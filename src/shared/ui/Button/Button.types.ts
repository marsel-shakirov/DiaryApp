import React from 'react'

import { IconName } from '@/shared/constants'
import type { ClsxProps } from '@/shared/types'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	form?: string
	icon?: IconName
	styled?: ClsxProps
	title?: string
	disabled?: boolean
	iconWidth?: string
	iconHeight?: string
	aria?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
