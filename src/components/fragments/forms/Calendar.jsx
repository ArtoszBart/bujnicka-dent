import React from 'react';

import { formatDateLong } from '../../../helpers/dateAndTime';
import CalendarDay from '../callendar/CalendarDay';
import useCalendar from './customHooks/useCalendar';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Calendar({ doctorId, handleChange, value, error }) {
	const {
		freeSlots,
		isNextWeekAvailable,
		isPrevWeekAvailable,
		nextWeek,
		previousWeek,
		weekDays,
	} = useCalendar(doctorId);
	return (
		<div className={`calendar${error ? ' error-calendar' : ''}`}>
			<div className='calendar-wrapper'>
				<nav className='calendar-nav' aria-label='calendar navigation'>
					<div
						className={`calendar-nav-button${
							isPrevWeekAvailable ? '' : ' disabled'
						}`}
						to='/'
						onClick={() => previousWeek()}
					>
						<FaChevronLeft />
					</div>
					<p>
						{formatDateLong(weekDays[0])} -{' '}
						{formatDateLong(weekDays[weekDays.length - 1])}
					</p>
					<div
						className={`calendar-nav-button${
							isNextWeekAvailable ? '' : ' disabled'
						}`}
						to='/'
						onClick={() => nextWeek()}
					>
						<FaChevronRight />
					</div>
				</nav>

				{doctorId === '' ? (
					<span className='info'>
						Wybierz lekarza aby zobaczyć dostępne godziny
					</span>
				) : (
					<div className='calendar-schedule'>
						<CalendarDay
							date={weekDays[0]}
							timeSlots={
								freeSlots.find((weekDay) => {
									return weekDay.dayOfWeek === 1;
								})?.timeSlots
							}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[1]}
							timeSlots={
								freeSlots.find(
									(weekDay) => weekDay.dayOfWeek === 2
								)?.timeSlots
							}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[2]}
							timeSlots={
								freeSlots.find(
									(weekDay) => weekDay.dayOfWeek === 3
								)?.timeSlots
							}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[3]}
							timeSlots={
								freeSlots.find(
									(weekDay) => weekDay.dayOfWeek === 4
								)?.timeSlots
							}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[4]}
							timeSlots={
								freeSlots.find(
									(weekDay) => weekDay.dayOfWeek === 5
								)?.timeSlots
							}
							selectedDate={value}
							handleChange={handleChange}
						/>
					</div>
				)}
			</div>
			{error && <span className='error-text'>{error}</span>}
		</div>
	);
}

export default Calendar;
