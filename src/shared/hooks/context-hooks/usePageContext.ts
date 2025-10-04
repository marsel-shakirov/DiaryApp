import { useContext } from 'react'

import { PageContext } from '@/shared/context'

export function usePageContext() {
	const context = useContext(PageContext)

	if (!context) {
		throw new Error('The usePageContext must not be empty')
	}

	return context
}
