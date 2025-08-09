import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import { ButtonProps } from './Button.types'

import styles from './Button.module.css'

export const Button = ({
	form,
	icon,
	styled = [],
	iconWidth = '24',
	iconHeight = '24',
	title,
	aria,
	type = 'button',
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			form={form}
			type={type}
			className={clsx(styles, 'button', ...styled)}
			aria-label={aria}
			disabled={disabled}
			onClick={onClick}
		>
			{icon && <Icon name={icon} width={iconWidth} height={iconHeight} />}
			{title && <span className={styles.buttonTitle}>{title}</span>}
		</button>
	)
}
