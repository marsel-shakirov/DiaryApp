type ValueOf<T> = T[keyof T]

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
