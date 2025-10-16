import { BrowserRouter } from './provider'
import { Route } from './router'

import { AddNotePage, HomePage } from '@/pages'

import { Footer, Header } from '@/widgets'

import { PAGES } from '@/shared/constants'
import { Content } from '@/shared/ui'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Content>
					<Route path={PAGES.Home} element={<HomePage />} />
					<Route path={PAGES.Notes} element={<AddNotePage />} />
				</Content>
				<Footer />
			</BrowserRouter>
		</>
	)
}
