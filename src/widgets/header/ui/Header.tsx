import { IconNames, PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'
import { Button, Logo } from '@/shared/ui'

import styles from './Header.module.css'

export const Header = () => {
	const { currentPage, navigate } = usePageContext()

	const isPageHome = currentPage === PAGES.Home

	return (
		<header className={`${styles.header} container`}>
			<Logo />
			{isPageHome && (
				<Button
					icon={IconNames.Edit}
					aria="Редактировать"
					onClick={() => navigate(PAGES.Note)}
				/>
			)}
		</header>
	)
}
