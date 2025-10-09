import { IconNames, PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'
import { Button, Logo } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Header.module.css'

export const Header = () => {
	const { currentPage, navigate } = usePageContext()

	const isPageHome = currentPage === PAGES.Home

	return (
		<header className={`${clsx(styles, 'header')} container`}>
			<Logo />
			{isPageHome && (
				<Button
					icon={IconNames.Edit}
					aria="Создать первую запись"
					onClick={() => navigate(PAGES.Create)}
				/>
			)}
		</header>
	)
}
