import { ContentProps } from './Content.types'

export const Content = ({ children }: ContentProps) => {
	return <main className="container">{children}</main>
}
