import { createContext } from 'react'

import { PagesName } from '@/shared/constants'

export interface ContextProps {
	currentPath: string
	setCurrentPath: (path: string) => void
	navigate: (url: PagesName) => void
}

export const RouterContext = createContext<ContextProps | null>(null)
