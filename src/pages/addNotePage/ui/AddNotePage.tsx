import React from 'react'

import NoteImage from '@/shared/assets/images/png/default-state.png'
import { IconNames } from '@/shared/constants'
import emojiData from '@/shared/mock/emojiData.json'
import { Button, Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './addNotePage.module.css'

export const AddNotePage = () => {
	const [isSelected, setIsSelected] = React.useState(false)
	const [isShowDialog, setIsShowDialog] = React.useState(false)
	const [selectValue, setSelectValue] = React.useState('😊')

	const formId = React.useId()

	const inputDateRef = React.useRef<HTMLInputElement>(null)
	const dialogRef = React.useRef<HTMLDialogElement>(null)

	const handleDateChange = () => {
		inputDateRef.current?.showPicker()
	}

	const handleEmojiSelected = (event: React.MouseEvent<HTMLLIElement>) => {
		if (event.target && event.target instanceof HTMLElement) {
			setSelectValue(event.target.textContent)
			setIsSelected(true)
		}
	}

	const handleEmojiKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
		if (
			event.code === 'Enter' &&
			event.target &&
			event.target instanceof HTMLElement
		) {
			setSelectValue(event.target.textContent)
			setIsSelected(true)
		}
	}

	React.useEffect(() => {
		function handleCloseDialog(event: KeyboardEvent) {
			if (
				isShowDialog &&
				event.code === 'Escape' &&
				event.target &&
				event.target instanceof HTMLElement
			) {
				dialogRef.current?.close()
				setIsShowDialog(false)
			}
		}
		window.addEventListener('keydown', handleCloseDialog)

		return () => window.removeEventListener('keydown', handleCloseDialog)
	}, [isShowDialog])

	const handleDialogToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (isShowDialog) {
			dialogRef.current?.close()
			setIsShowDialog(false)
		} else {
			dialogRef.current?.show()
			event.currentTarget?.focus()
			setIsShowDialog(true)
		}
	}

	const handleEmojiClean = () => {
		setIsSelected(false)
	}

	return (
		<section className={styles.addNotePage}>
			<h1 className="visually-hidden">Добавить заметку</h1>
			<form id={formId} className={styles.form} action="">
				<div className={`${styles.formInner} ${styles.formTextArea}`}>
					<label className={styles.headingLabel}>
						<span className="visually-hidden">Добавить заголовок</span>
						<input
							className={styles.heading}
							id="heading"
							name="heading"
							type="text"
							placeholder="Заголовок"
						/>
					</label>
					<label className={styles.descriptionLabel}>
						<span className="visually-hidden">Добавить описание</span>
						<textarea
							className={styles.description}
							id="description"
							name="description"
							placeholder="Описание"
						></textarea>
					</label>
				</div>
				<div className={`${styles.formInner} ${styles.formMenu}`}>
					<div className={styles.menu}>
						<label className={styles.dateLabel}>
							<input
								className={styles.date}
								type="date"
								id="eventDate"
								name="eventDate"
								defaultValue="2023-11-14"
								ref={inputDateRef}
							/>
							<button
								type="button"
								onClick={handleDateChange}
								className={styles.buttonDateIcon}
							>
								<span className="visually-hidden">Добавить дату</span>
								<Icon name={IconNames.Calendar} width="24" height="24" />
							</button>
						</label>
						<label className={styles.emojiLabel}>
							<input
								className={styles.emojiInput}
								type="text"
								id="emoji"
								name="emoji"
								defaultValue={selectValue}
							/>
							<button
								onClick={handleDialogToggle}
								className={clsx(styles, 'popoverButton', {
									popoverSelected: isShowDialog,
								})}
								type="button"
							>
								<span className="visually-hidden">Добавить настроение</span>
								{isSelected ? (
									<span className={styles.emojiSelected}>{selectValue}</span>
								) : (
									<Icon name={IconNames.Emoji} width="24" height="24" />
								)}

								<Icon
									name={IconNames.Chevron}
									width="16"
									height="16"
									styled={[{ rotate: isShowDialog }]}
								/>
							</button>
							<dialog ref={dialogRef} id="popover" className={styles.popover}>
								<ul className={styles.emojiList}>
									{emojiData.emoticons.map((emoji, index) => (
										<li
											key={`${index}_${emoji}`}
											tabIndex={0}
											className={styles.emojiItem}
											onClick={handleEmojiSelected}
											onKeyDown={handleEmojiKeyDown}
										>
											{emoji}
										</li>
									))}
								</ul>
								<Button
									icon={IconNames.Clean}
									styled={['selectClose']}
									disabled={!isSelected}
									iconHeight="20"
									iconWidth="20"
									title="Убрать эмоцию"
									type="button"
									onClick={handleEmojiClean}
								/>
							</dialog>
						</label>
					</div>
					<label className={styles.imageLabel}>
						<span className="visually-hidden">Добавить картинку</span>
						<img className={styles.noteImage} src={NoteImage} alt="" />
						<Icon name={IconNames.Field} width="40" height="40" />
						<input
							className={`${styles.image} visually-hidden`}
							type="file"
							name="image"
						/>
					</label>
					<label>
						<span className="visually-hidden">Добавить тег</span>
						<input
							className={styles.heading}
							placeholder="#теги"
							type="text"
							id="tag"
							name="tag"
						/>
					</label>
				</div>
			</form>
			<div className={styles.formButtons}>
				<Button
					form={formId}
					type="submit"
					icon={IconNames.Edit}
					title="Создать запись"
				/>
				<Button type="button" title="Отменить" styled={['formButton']} />
			</div>
		</section>
	)
}
