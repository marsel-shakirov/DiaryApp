import { useContext } from 'react'

import { PageContext } from '@/shared/context'

export function usePageContext() {
	const context = useContext(PageContext)

	if (context === null) {
		throw new Error('usePageContext return null')
	}

	return context
}
