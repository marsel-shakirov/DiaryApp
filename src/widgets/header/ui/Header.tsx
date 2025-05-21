import styles from './Header.module.css';

import { Button, Logo } from '@/shared/ui';

export const Header: React.FC = () => {
	return (
		<header className={`${styles.header} container`}>
			<Logo />
			<Button styled={{ classes: ['buttonSmall'] }} />
		</header>
	);
};
