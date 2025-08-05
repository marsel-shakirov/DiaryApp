import React from 'react'

export interface IconProps extends React.HTMLAttributes<SVGAElement> {
	name: string
	width: string
	height: string
	fill?: string
}
