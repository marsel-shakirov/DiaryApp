import { ReactElement, useEffect, useState } from 'react'

export const Route = ({
	path,
	children,
}: {
	path: string
	children: ReactElement
}) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	console.log(currentPath)

	useEffect(() => {
		const onPopState = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener('popstate', onPopState)

		return () => {
			window.removeEventListener('popstate', onPopState)
		}
	}, [])

	return currentPath === path ? children : null
}
