import { useContext } from 'react'

import { RouterContext } from '@/shared/context'

export function useRouterContext() {
	const context = useContext(RouterContext)

	if (!context) {
		throw new Error('The useRouterContext must not be empty')
	}

	return context
}
