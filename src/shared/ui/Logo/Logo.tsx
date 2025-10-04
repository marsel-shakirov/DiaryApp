import { IconNames, PAGES } from '@/shared/constants'
import { usePageContext } from '@/shared/hooks'
import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Logo.module.css'

export const Logo = () => {
	const { navigate } = usePageContext()

	return (
		<a
			className={clsx(styles, 'logo')}
			href="#"
			onClick={() => navigate(PAGES.Home)}
		>
			<div className={clsx(styles, 'logoImage')}>
				<Icon name={IconNames.Balloon} width="36" height="36" />
				<span className="visually-hidden">На главную страницу</span>
			</div>
			<span className={clsx(styles, 'logoDesc')}>DreamTime</span>
		</a>
	)
}
