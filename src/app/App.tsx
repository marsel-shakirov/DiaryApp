import { PageProvider } from './provider'

import { AddNotePage, HomePage } from '@/pages'

import { Footer, Header } from '@/widgets'

import { Content } from '@/shared/ui'

export const App = () => {
	return (
		<>
			<PageProvider>
				<Header />
				<Content HomePage={HomePage} AddNotePage={AddNotePage} />
				<Footer />
			</PageProvider>
		</>
	)
}
