import { PageProvider } from './provider'
import { Route } from './route'

import { AddNotePage, HomePage } from '@/pages'

import { Footer, Header } from '@/widgets'

import { PAGES } from '@/shared/constants'
import { Content } from '@/shared/ui'

export const App = () => {
	return (
		<>
			<PageProvider>
				<Header />
				<Content>
					<Route path={PAGES.Home}>
						<HomePage />
					</Route>
					<Route path={PAGES.Note}>
						<AddNotePage />
					</Route>
				</Content>
				<Footer />
			</PageProvider>
		</>
	)
}
