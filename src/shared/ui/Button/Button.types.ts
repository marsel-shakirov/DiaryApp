import React from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	icon?: string
	styled?: string[]
	title?: string
	aria?: string
	type?: 'button' | 'submit' | 'reset'
}
