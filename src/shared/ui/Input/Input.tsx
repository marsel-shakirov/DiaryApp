import { InputProps } from './Input.type'

import { clsx } from '@/shared/utils'

import styles from './Input.module.css'

export const Input = ({
	name,
	type = 'text',
	placeholder = '',
	accessibility = '',
	styled = [],
}: InputProps) => {
	return (
		<label className={clsx(styles, 'inputLabel')}>
			<span className="visually-hidden">{accessibility}</span>
			<input
				className={clsx(styles, ...styled)}
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
			/>
		</label>
	)
}
