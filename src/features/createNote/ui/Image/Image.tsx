import NoteImage from '@/shared/assets/images/png/default-state.png'
import { IconNames } from '@/shared/constants'
import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Image.module.css'

export const Image = () => {
	return (
		<label className={clsx(styles, 'imageLabel')}>
			<span className="visually-hidden">Добавить картинку</span>
			<img
				className={clsx(styles, 'noteImage')}
				width={380}
				height={240}
				src={NoteImage}
				alt=""
			/>
			<Icon name={IconNames.Field} width="40" height="40" />
			<input
				className={`${clsx(styles, 'image')} visually-hidden`}
				type="file"
				name="image"
			/>
		</label>
	)
}
