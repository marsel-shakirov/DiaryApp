import React from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	icon?: string
	title?: string
	aria?: string
	type?: 'button' | 'submit' | 'reset'
}
