import React from 'react'

import type { ClsxProps } from '@/shared/types'

export interface TextareaProps extends React.HTMLAttributes<HTMLElement> {
	name: string
	placeholder?: string
	accessibility?: string
	styled?: ClsxProps
}
