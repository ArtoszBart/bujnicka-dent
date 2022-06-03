import React from 'react'
import { useState, useEffect } from 'react'
import { formatDateShort, formatDateLong, formatDateSql } from '../../../helpers/dateAndTime';

function Calendar(props) {

	const [isPrevWeekAvailable, setIsPrevWeekAvailable] = useState(false);
	const [isNextWeekAvailable, setIsNextWeekAvailable] = useState(true);
	const weekDays = props.weekDays;

	useEffect(() => {
		props.getFreeDates();
	}, [props.weekDays]);

	const previousWeek = () => {
		if (!isPrevWeekAvailable) {
			return;
		}
		let newWeek = getNewDays(-7);
		const today = new Date();
		const prevTue = new Date(newWeek[0]).setDate(newWeek[0].getDate() - 4);
		if (newWeek[0] < today || prevTue < today) {
			setIsPrevWeekAvailable(false);
		}
		setIsNextWeekAvailable(true);
		props.setWeekDays(newWeek);
	}

	const nextWeek = () => {
		if (!isNextWeekAvailable) {
			return;
		}
		let newWeek = getNewDays(7);
		const today = new Date();
		var nextMonth = new Date(today.setMonth(today.getMonth() + 1));
		if (newWeek[4] > nextMonth) {
			setIsNextWeekAvailable(false);
		}
		setIsPrevWeekAvailable(true);
		props.setWeekDays(newWeek);
	}

	const getNewDays = days => {
		let newWeek = [];
		weekDays.forEach((weekDay) => {
			const day = new Date(weekDay)
			day.setDate(day.getDate() + days)
			newWeek.push(day)
		});
		return newWeek;
	}

	return (
		<div className={`calendar${props.error ? ' error-calendar' : ''}`}>
			<div className="calendar-wrapper">
				<nav className="calendar-nav" aria-label='calendar navigation'>
					<i className={`fas fa-chevron-left ${isPrevWeekAvailable ? '' : 'disabled'}`} onClick={() => previousWeek()} />
					<p>{formatDateLong(weekDays[0])} - {formatDateLong(weekDays[weekDays.length - 1])}</p>
					<i className={`fas fa-chevron-right ${isNextWeekAvailable ? '' : 'disabled'}`} onClick={() => nextWeek()} />
				</nav>
				<div className="calendar-schedule">
					{props.doctors.find(doc => props.values.doctorId === doc.id.toString())?.schedule.map((day, dayIndex) => {
						let ii = 0;
						return (
							<div className="calendar-schedule-day" key={dayIndex}>
								<p className="center">{`${formatDateShort(weekDays[dayIndex])}`}</p>
								{day.freeTimes.map((time, timeIndex) => {
									const dateValue = `${formatDateSql(weekDays[dayIndex])} ${time}`;
									const nextHour = new Date(new Date().setHours(new Date().getHours() + 1));
									if (weekDays[dayIndex] < nextHour) return null;
									ii++;
									return <button
										key={timeIndex}
										type="button"
										name="date"
										className={`calendar-schedule-time ${(props.values.date === dateValue) ? 'time-selected' : ''}`}
										value={dateValue}
										onClick={props.handleChange}
									>
										{time}
									</button>
								})}
								{ii === 0 ? <span>Brak wolnych terminów</span> : <></>}
							</div>
						)
					})}
				</div>
				{props.values.doctorId === '' ? <span className='info'>Wybierz lekarza aby zobaczyć dostępne godziny</span> : <></>}
			</div>
			{props.error && <span className="error-text">{props.error}</span>}
		</div>
	)
}

export default Calendar