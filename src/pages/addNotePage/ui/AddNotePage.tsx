import React from 'react'

import { IconNames } from '@/shared/constants'
import { Button, Calendar, Image, Input, Selector, Textarea } from '@/shared/ui'

import styles from './addNotePage.module.css'

export const AddNotePage = () => {
	const formId = React.useId()

	return (
		<>
			<title>DiaryApp | Добавить заметку</title>

			<section className={styles.addNotePage}>
				<h1 className="visually-hidden">Добавить заметку</h1>
				<form id={formId} className={styles.form} action="">
					<div className={`${styles.formInner} ${styles.formDescription}`}>
						<Input
							name="heading"
							placeholder="Заголовок"
							accessibility="Добавить заголовок"
							styled={['inputHeading']}
						/>
						<Textarea
							name="description"
							placeholder="Описание"
							accessibility="Добавить описание"
							styled={['description']}
						/>
					</div>
					<div className={`${styles.formInner} ${styles.formFilter}`}>
						<div className={styles.filter}>
							<Calendar />
							<Selector />
						</div>
						<Image />
						<Input
							name="tag"
							placeholder="#теги"
							styled={['inputHeading']}
							accessibility="Добавить тег"
						/>
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
		</>
	)
}
