// type ClsxProps<T = string> = { [key: string]: T }
import { ClsxProps, Styles } from '../types/Clsx.types'

export const clsx = (styles: Styles, ...args: ClsxProps): string => {
	const classes: string[] = []
	for (const arg of args) {
		if (typeof arg === 'string' && arg) {
			classes.push(arg)
		} else if (typeof arg === 'object' && arg !== null) {
			for (const key in arg) {
				if (Object.hasOwn(arg, key) && arg[key]) {
					classes.push(key)
				}
			}
		}
	}
	return classes.map((el) => styles[el]).join(' ')
}
