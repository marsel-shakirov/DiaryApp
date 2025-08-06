import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import { ButtonProps } from './Button.types'

import styles from './Button.module.css'

export const Button = ({ icon, title, aria, type = 'button' }: ButtonProps) => {
	return (
		<button type={type} className={clsx(styles, 'button')} aria-label={aria}>
			{icon && <Icon name={icon} width="24" height="24" fill="#1E2022" />}
			{title && <span className={styles.buttonTitle}>{title}</span>}
		</button>
	)
}
