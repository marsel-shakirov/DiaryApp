import { PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'

import type { ContentProps } from './Content.types'

export const Content = ({ HomePage, AddNotePage }: ContentProps) => {
	const { currentPage } = usePageContext()
	return (
		<main className="container">
			{currentPage === PAGES.Home && <HomePage />}
			{currentPage === PAGES.Note && <AddNotePage />}
		</main>
	)
}
