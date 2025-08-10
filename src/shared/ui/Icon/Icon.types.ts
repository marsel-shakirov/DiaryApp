import React from 'react'

import { IconName } from '@/shared/constants'
import type { ClsxProps } from '@/shared/types'

export interface IconProps extends React.HTMLAttributes<SVGAElement> {
	name: IconName
	width: string
	height: string
	styled?: ClsxProps
}
