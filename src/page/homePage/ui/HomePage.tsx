import { Button } from '@/shared/ui';
import styles from './HomePage.module.css';

import IconEmpty from '/public/svg/empty.svg?react';

export const HomePage: React.FC = () => {
	return (
		<section className={styles.homePage}>
			<div className={styles.homePageWrapper}>
				<IconEmpty />
				<Button title="Создать первую запись" />
			</div>
		</section>
	);
};
