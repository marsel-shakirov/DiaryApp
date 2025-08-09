import { clsx } from '@/shared/utils'

import { IconProps } from './Icon.types'

import styles from './Icon.module.css'

export const Icon = ({
	name,
	width = '24',
	height = '24',
	styled = [],
}: IconProps) => {
	const isNotFoundName = !name

	if (isNotFoundName) {
		console.warn(`Icon component for "${name}" not found.`)
		return null
	}

	return (
		<svg
			className={clsx(styles, name, ...styled)}
			width={width}
			height={height}
		>
			<use href={`#icon-${name}`}></use>
		</svg>
	)
}
