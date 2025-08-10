import { createContext } from 'react'

import { PagesName } from '@/shared/constants'

export interface ContextProps {
	currentPage: string
	navigate: (url: PagesName) => void
}

export const PageContext = createContext<ContextProps | null>(null)
