import { JSX } from 'react'

export interface ContentProps extends React.HTMLAttributes<HTMLElement> {
	HomePage: JSX.ElementType
	AddNotePage: JSX.ElementType
}
