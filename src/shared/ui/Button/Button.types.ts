import React from 'react'

import { IconName } from '@/shared/constants'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	form?: string
	icon?: IconName
	styled?: (string | { [key: string]: unknown })[]
	title?: string
	disabled?: boolean
	iconWidth?: string
	iconHeight?: string
	aria?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
