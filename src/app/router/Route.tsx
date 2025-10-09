import type { RouteProps } from './Route.type'
import { useEffect, useState } from 'react'

export const Route = ({ path, element }: RouteProps) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const onPopState = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener('popstate', onPopState)

		return () => {
			window.removeEventListener('popstate', onPopState)
		}
	}, [])

	return currentPath === path ? element : null
}
