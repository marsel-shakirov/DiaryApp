export const getClasses = (
	styles: { [key: string]: string },
	styled: string[]
): string => {
	return styled.map((el) => styles[el]).join(' ')
}
