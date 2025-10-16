import type { RouteProps } from './Route.type'
import { useEffect } from 'react'

import { useRouterContext } from '@/shared/hooks'

export const Route = ({ path, element }: RouteProps) => {
	const { currentPath, setCurrentPath } = useRouterContext()

	useEffect(() => {
		const onPopState = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener('popstate', onPopState)

		return () => {
			window.removeEventListener('popstate', onPopState)
		}
	}, [currentPath, setCurrentPath])

	return currentPath === path ? element : null
}
