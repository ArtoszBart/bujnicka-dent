import React from 'react';

import { formatDateShort, formatDateSql } from '../../../helpers/dateAndTime';

export default function CalendarDay({
	date,
	data,
	selectedDate,
	handleChange,
}) {
	return (
		<>
			<div
				className={`calendar-schedule-day${
					data?.feast ? ' feast' : ''
				}`}
			>
				<p className='center'>{`${formatDateShort(date)}`}</p>
			</div>
			<div className='calendar-schedule-times'>
				{data?.timeSlots.map((timeSlot, index) => {
					const dateValue = `${formatDateSql(date)} ${timeSlot.time}`;
					const isButtonAvailable = !timeSlot.isBooked;
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
