import { HomePage } from '@/pages'

import { Footer, Header } from '@/widgets'

import { Content } from '@/shared/ui'

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<HomePage />
			</Content>
			<Footer />
		</>
	)
}
