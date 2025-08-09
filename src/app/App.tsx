import { AddNotePage } from '@/pages'

import { Footer, Header } from '@/widgets'

import { Content } from '@/shared/ui'

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				{/* <HomePage /> */}
				<AddNotePage />
			</Content>
			<Footer />
		</>
	)
}
