import { useRef } from 'react'

import { IconNames } from '@/shared/constants'
import { Icon } from '@/shared/ui'
import { clsx } from '@/shared/utils'

import styles from './Calendar.module.css'

export const Calendar = () => {
	const inputDateRef = useRef<HTMLInputElement>(null)

	const handleDateChange = () => {
		inputDateRef.current?.showPicker()
	}

	return (
		<label className={clsx(styles, 'calendarLabel')}>
			<input
				className={clsx(styles, 'calendar')}
				type="date"
				id="eventDate"
				name="eventDate"
				defaultValue="2023-11-14"
				ref={inputDateRef}
			/>
			<button
				type="button"
				onClick={handleDateChange}
				className={clsx(styles, 'buttonCalendar')}
			>
				<span className="visually-hidden">Добавить дату</span>
				<Icon name={IconNames.Calendar} width="24" height="24" />
			</button>
		</label>
	)
}
