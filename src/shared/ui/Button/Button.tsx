import IconEdit from '/public/svg/edit.svg?react';

import { getClasses } from '@/shared/utils';

import { type IButtonProps } from '@/shared/model/types/interface';

import styles from './Button.module.css';

export const Button: React.FC<IButtonProps> = ({
	styled = { classes: ['buttonMain'] },
	title,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${getClasses(styles, styled)}`}
		>
			<IconEdit width="24" height="24" fill="#1E2022" />
			{title && <span className={styles.buttonTitle}>{title}</span>}
		</button>
	);
};
