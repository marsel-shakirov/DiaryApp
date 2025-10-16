import { IconNames, PAGES } from '@/shared/constants'
import { useRouterContext } from '@/shared/hooks'
import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Logo.module.css'

export const Logo = () => {
	const { navigate } = useRouterContext()

	return (
		<a
			className={clsx(styles, 'logo')}
			href="#"
			onClick={(event) => {
				event.preventDefault()
				navigate(PAGES.Home)
			}}
		>
			<div className={clsx(styles, 'logoImage')}>
				<Icon name={IconNames.Balloon} width="36" height="36" />
				<span className="visually-hidden">На главную страницу</span>
			</div>
			<span className={clsx(styles, 'logoDesc')}>DreamTime</span>
		</a>
	)
}
