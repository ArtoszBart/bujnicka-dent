import React from 'react';

import { formatDateShort, formatDateSql } from '../../../helpers/dateAndTime';

export default function CalendarDay({
	date,
	timeSlots,
	selectedDate,
	handleChange,
}) {
	return (
		<>
			<div className='calendar-schedule-day'>
				<p className='center'>{`${formatDateShort(date)}`}</p>

				{timeSlots?.length === 0 ? (
					<span>Brak wolnych terminów</span>
				) : (
					<></>
				)}
			</div>
			<div className='calendar-schedule-times'>
				{timeSlots?.map((timeSlot, index) => {
					const dateValue = `${formatDateSql(date)} ${timeSlot.time}`;
					const nextHour = new Date(
						new Date().setHours(new Date().getHours() + 1)
					);
					const isButtonAvailable =
						date >= nextHour && !timeSlot.isBooked;
					return (
						<button
							key={index}
							type='button'
							name='date'
							className={`calendar-schedule-time${
								selectedDate === dateValue
									? ' time-selected'
									: ''
							}`}
							value={dateValue}
							disabled={!isButtonAvailable}
							onClick={handleChange}
						>
							{timeSlot.time}
						</button>
					);
				})}
			</div>
		</>
	);
}
