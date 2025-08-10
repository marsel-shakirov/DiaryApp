import { IconNames, PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'
import { Icon } from '@/shared/ui'

import styles from './Logo.module.css'

export const Logo = () => {
	const { navigate } = usePageContext()

	return (
		<a className={styles.logo} href="#" onClick={() => navigate(PAGES.Home)}>
			<div className={styles.logoImage}>
				<Icon name={IconNames.Balloon} width="36" height="36" />
				<span className="visually-hidden">На главную страницу</span>
			</div>
			<span className={styles.logoDesc}>DreamTime</span>
		</a>
	)
}
