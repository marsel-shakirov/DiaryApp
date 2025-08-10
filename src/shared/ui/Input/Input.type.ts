import React from 'react'

import type { ClsxProps } from '@/shared/types'

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
	name: string
	type?: string
	placeholder?: string
	accessibility?: string
	styled?: ClsxProps
}
