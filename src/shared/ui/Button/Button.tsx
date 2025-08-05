import { Icon } from '@/shared/ui'
import { getClasses } from '@/shared/utils'

import { ButtonProps } from './Button.types'

import styles from './Button.module.css'

export const Button = ({
	icon,
	styled,
	title,
	aria,
	type = 'button',
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styled ? getClasses(styles, styled) : ''}`}
			aria-label={aria}
		>
			{icon && <Icon name={icon} width="24" height="24" fill="#1E2022" />}
			{title && <span className={styles.buttonTitle}>{title}</span>}
		</button>
	)
}
