import type { TextareaProps } from './Textarea.type'

import { clsx } from '@/shared/utils'

import styles from './Textarea.module.css'

export const Textarea = ({
	name,
	placeholder,
	accessibility,
	styled = [],
}: TextareaProps) => {
	return (
		<label className={clsx(styles, 'textareaLabel')}>
			<span className="visually-hidden">{accessibility}</span>
			<textarea
				className={clsx(styles, ...styled)}
				id={name}
				name={name}
				placeholder={placeholder}
			></textarea>
		</label>
	)
}
