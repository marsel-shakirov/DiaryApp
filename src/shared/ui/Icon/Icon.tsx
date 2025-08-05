import { IconProps } from './Icon.types'

export const Icon = ({
	name,
	width = '24',
	height = '24',
	fill = '#fff',
}: IconProps) => {
	const isNotFoundName = !name

	if (isNotFoundName) {
		console.warn(`Icon component for "${name}" not found.`)
		return null
	}

	return (
		<svg width={width} height={height} fill={fill}>
			<use href={`#icon-${name}`}></use>
		</svg>
	)
}
