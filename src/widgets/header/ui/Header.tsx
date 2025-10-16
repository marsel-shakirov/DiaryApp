import { IconNames, PAGES } from '@/shared/constants'
import { useRouterContext } from '@/shared/hooks'
import { Button, Logo } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Header.module.css'

export const Header = () => {
	const { currentPath, navigate } = useRouterContext()

	const isPageHome = currentPath === PAGES.Home

	return (
		<header className={`${clsx(styles, 'header')} container`}>
			<Logo />
			{isPageHome && (
				<Button
					icon={IconNames.Edit}
					aria="Создать первую запись"
					onClick={() => navigate(PAGES.Notes)}
				/>
			)}
		</header>
	)
}
