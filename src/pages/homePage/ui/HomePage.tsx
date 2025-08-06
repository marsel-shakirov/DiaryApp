import EmptyImage from '@/shared/assets/images/svg/empty.svg'
import { IconNames } from '@/shared/consts'
import { Button } from '@/shared/ui'

import styles from './HomePage.module.css'

export const HomePage = () => {
	return (
		<section className={styles.homePage}>
			<h1 className="visually-hidden">DiaryApp: Ваш личный трекер жизни</h1>
			<div className={styles.homePageWrapper}>
				<img src={EmptyImage} alt="" />
				<Button icon={IconNames.edit} title="Создать первую запись" />
			</div>
		</section>
	)
}
