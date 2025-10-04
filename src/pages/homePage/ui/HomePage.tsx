import EmptyImage from '@/shared/assets/images/svg/empty.svg'
import { IconNames, PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'
import { Button } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './HomePage.module.css'

export const HomePage = () => {
	const { navigate } = usePageContext()

	return (
		<>
			<title>DiaryApp | Главная страница</title>

			<section className={clsx(styles, 'homePage')}>
				<h1 className="visually-hidden">DiaryApp: Ваш личный трекер жизни</h1>
				<div className={clsx(styles, 'homePageWrapper')}>
					<img src={EmptyImage} alt="" />
					<Button
						icon={IconNames.Edit}
						title="Создать первую запись"
						onClick={() => navigate(PAGES.Note)}
					/>
				</div>
			</section>
		</>
	)
}
