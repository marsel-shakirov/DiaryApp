import React, { useState } from 'react'

import { PAGES, PagesName } from '@/shared/constants'
import { PageContext } from '@/shared/context'

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentPage, setCurrentPage] = useState<string>(PAGES.Home)

	const navigate = (url: PagesName) => {
		setCurrentPage(url)
		window.history.pushState({}, '', `${url}`)
		const navEvent = new PopStateEvent('popstate')
		window.dispatchEvent(navEvent)
	}

	return <PageContext value={{ currentPage, navigate }}>{children}</PageContext>
}
