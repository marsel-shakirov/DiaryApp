import { Calendar, Image, Input, Selector, Textarea } from '@/features'

import { IconNames } from '@/shared/constants'
import { Button } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './AddNote.module.css'

export const AddNote = () => {
	return (
		<>
			<form className={clsx(styles, 'addNote')} action="">
				<div className={clsx(styles, 'form')}>
					<div className={clsx(styles, 'formInner', 'formDescription')}>
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
					<div className={clsx(styles, 'formInner', 'formFilter')}>
						<div className={clsx(styles, 'filter')}>
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
				</div>
				<div className={clsx(styles, 'formButtons')}>
					<Button type="submit" icon={IconNames.Edit} title="Создать запись" />
					<Button type="button" title="Отменить" styled={['formButton']} />
				</div>
			</form>
		</>
	)
}
