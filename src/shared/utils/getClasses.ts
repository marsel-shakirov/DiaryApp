export const getClasses = (
	styles: { [key: string]: string },
	styled: { classes: string[] }
): string => {
	return styled.classes.map(el => styles[el]).join(' ');
};
