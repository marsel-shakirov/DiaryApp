import styles from './Logo.module.css';

import IconLogo from '/public/svg/balloon.svg?react';

export const Logo: React.FC = () => {
	return (
		<a className={styles.logo} href="/">
			<div className={styles.logoImage}>
				<IconLogo width="36" height="36" fill="#1E2022" />
			</div>
			<span className={styles.logoDesc}>DreamTime</span>
		</a>
	);
};
