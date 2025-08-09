import React from 'react'

import { IconName } from '@/shared/constants'

export interface IconProps extends React.HTMLAttributes<SVGAElement> {
	name: IconName
	width: string
	height: string
	styled?: (string | { [key: string]: unknown })[]
}
