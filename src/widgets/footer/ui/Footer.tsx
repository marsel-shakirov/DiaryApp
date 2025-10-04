import { clsx } from '@/shared/utils'

import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={`${clsx(styles, 'footer')} container`}>
			<p className={clsx(styles, 'preax')}>
				Проект выполнен в рамках стажировки&ensp;
				<a
					href="https://preax.ru"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(styles, 'preaxLink')}
					lang="en"
				>
					preax
				</a>
			</p>
		</footer>
	)
}
