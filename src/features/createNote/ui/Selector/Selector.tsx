import React, { useEffect, useRef, useState } from 'react'

import emojiData from '@/shared/api/mock/emojiData.json'
import { IconNames } from '@/shared/constants'
import { Button, Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Selector.module.css'

export const Selector = () => {
	const [isSelected, setIsSelected] = useState(false)
	const [isShowPanel, setIsShowPanel] = useState(false)
	const [selectorValue, setSelectorValue] = useState('😊')

	const panelRef = useRef<HTMLDialogElement>(null)

	const handleEmojiSelect = (event: React.MouseEvent<HTMLLIElement>) => {
		if (event.target && event.target instanceof HTMLElement) {
			setSelectorValue(event.target.textContent)
			setIsSelected(true)
		}
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>) => {
		if (
			event.code === 'Enter' &&
			event.target &&
			event.target instanceof HTMLElement
		) {
			setSelectorValue(event.target.textContent)
			setIsSelected(true)
		}
	}

	const handleShowPanel = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (isShowPanel && panelRef.current) {
			panelRef.current.close()
			setIsShowPanel(false)
		} else {
			panelRef.current?.show()
			event.currentTarget.focus()
			setIsShowPanel(true)
		}
	}

	const handleEmojiClean = () => {
		setIsSelected(false)
	}

	useEffect(() => {
		function handlePanelClose(event: KeyboardEvent) {
			if (isShowPanel && event.code === 'Escape' && panelRef.current) {
				panelRef.current.close()
				setIsShowPanel(false)
			}
		}
		window.addEventListener('keydown', handlePanelClose)

		return () => window.removeEventListener('keydown', handlePanelClose)
	}, [isShowPanel])

	return (
		<label className={clsx(styles, 'selectorLabel')}>
			<input
				className={clsx(styles, 'selectorInput')}
				type="text"
				id="emoji"
				name="emoji"
				defaultValue={selectorValue}
			/>
			<button
				onClick={handleShowPanel}
				className={clsx(styles, 'selectorButton', {
					panelSelected: isShowPanel,
				})}
				type="button"
			>
				<span className="visually-hidden">Добавить настроение</span>
				{isSelected ? (
					<span className={clsx(styles, 'emojiSelected')}>{selectorValue}</span>
				) : (
					<Icon name={IconNames.Emoji} width="24" height="24" />
				)}

				<Icon
					name={IconNames.Chevron}
					width="16"
					height="16"
					styled={[{ rotate: isShowPanel }]}
				/>
			</button>
			<dialog ref={panelRef} id="panel" className={clsx(styles, 'panel')}>
				<ul className={clsx(styles, 'panelList')}>
					{emojiData.emoticons.map((emoji, index) => (
						<li
							key={`${index}_${emoji}`}
							tabIndex={0}
							className={clsx(styles, 'panelItem')}
							onClick={handleEmojiSelect}
							onKeyDown={handleKeyPress}
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
	)
}
