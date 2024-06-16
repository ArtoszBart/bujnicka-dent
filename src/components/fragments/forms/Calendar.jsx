import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

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
		isLoading,
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
						{isLoading && (
							<div className='calendar-schedule-loader'>
								<CircleLoader color='#1b3c7b' />
							</div>
						)}
						<CalendarDay
							date={weekDays[0]}
							data={freeSlots.find((weekDay) => {
								return weekDay.dayOfWeek === 1;
							})}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[1]}
							data={freeSlots.find(
								(weekDay) => weekDay.dayOfWeek === 2
							)}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[2]}
							data={freeSlots.find(
								(weekDay) => weekDay.dayOfWeek === 3
							)}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[3]}
							data={freeSlots.find(
								(weekDay) => weekDay.dayOfWeek === 4
							)}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[4]}
							data={freeSlots.find(
								(weekDay) => weekDay.dayOfWeek === 5
							)}
							selectedDate={value}
							handleChange={handleChange}
						/>
						<CalendarDay
							date={weekDays[5]}
							data={freeSlots.find(
								(weekDay) => weekDay.dayOfWeek === 6
							)}
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
