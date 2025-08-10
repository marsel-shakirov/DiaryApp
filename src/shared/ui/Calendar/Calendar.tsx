import React from 'react'

import { IconNames } from '@/shared/constants'
import { Icon } from '@/shared/ui'

import styles from './Calendar.module.css'

export const Calendar = () => {
	const inputDateRef = React.useRef<HTMLInputElement>(null)

	const handleDateChange = () => {
		inputDateRef.current?.showPicker()
	}

	return (
		<label className={styles.calendarLabel}>
			<input
				className={styles.calendar}
				type="date"
				id="eventDate"
				name="eventDate"
				defaultValue="2023-11-14"
				ref={inputDateRef}
			/>
			<button
				type="button"
				onClick={handleDateChange}
				className={styles.buttonCalendar}
			>
				<span className="visually-hidden">Добавить дату</span>
				<Icon name={IconNames.Calendar} width="24" height="24" />
			</button>
		</label>
	)
}
