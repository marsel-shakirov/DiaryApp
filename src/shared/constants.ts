type ValueOf<T> = T[keyof T]

export const PAGES = {
	Home: '/',
	Notes: '/notes',
} as const

export const IconNames = {
	Balloon: 'balloon',
	Edit: 'edit',
	Calendar: 'calendar',
	Emoji: 'emoji',
	Chevron: 'chevron',
	Clean: 'clean',
	Field: 'field',
} as const

export type IconName = ValueOf<typeof IconNames>

export type PagesName = ValueOf<typeof PAGES>
