import { IconNames } from '@/shared/constants'
import { Button, Logo } from '@/shared/ui'

import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={`${styles.header} container`}>
			<Logo />
			<Button icon={IconNames.Edit} aria="Редактировать" />
		</header>
	)
}
