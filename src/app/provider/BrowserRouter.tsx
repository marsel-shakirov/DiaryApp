import React, { useState } from 'react'

import { PagesName } from '@/shared/constants'
import { RouterContext } from '@/shared/context'

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	const navigate = (url: PagesName) => {
		window.history.pushState({}, '', `${url}`)
		window.dispatchEvent(new PopStateEvent('popstate'))
	}

	return (
		<RouterContext value={{ currentPath, setCurrentPath, navigate }}>
			{children}
		</RouterContext>
	)
}
