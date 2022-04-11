import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { formatDateShort, formatDateLong, formatDateSql } from './../../../helpers/dateAndTime';

function Calendar(props) {

	const [isPrevWeekAvailable, setIsPrevWeekAvailable] = useState(false);
	const [isNextWeekAvailable, setIsNextWeekAvailable] = useState(true);
	const [weekDays, setWeekDays] = useState(
		() => {
			let today = new Date();
			let dayOfWeek = today.getDay() - 1;
			let monday = new Date();
			if (dayOfWeek > 4) {
				monday.setDate(monday.getDate() + 7 - dayOfWeek);
			} else {
				monday.setDate(monday.getDate() - dayOfWeek);
			}

			let thisWeek = [];
			for (let ii = 0; ii < 5; ii++) {
				const nextDay = new Date(monday)
				nextDay.setDate(nextDay.getDate() + ii)
				thisWeek.push(nextDay)
			}
			return thisWeek;
		}
	);
	const everyone = {
		id: 0,
		firstName: 'Wszyscy',
		lastName: '',
		schedule: [
			{ dayOfWeek: 1, freeTimes: [] },
			{ dayOfWeek: 2, freeTimes: [] },
			{ dayOfWeek: 3, freeTimes: [] },
			{ dayOfWeek: 4, freeTimes: [] },
			{ dayOfWeek: 5, freeTimes: [] }
		]
	}

	useEffect(() => {
		const dateFrom = formatDateSql(weekDays[0]);
		const dateTo = formatDateSql(weekDays[weekDays.length - 1]);
		axios.get(`http://192.168.0.95:4000/api/doctors/${dateFrom},${dateTo}`)
			.then(res => {
				res.data.forEach((doc) => {
					for (let day = 0; day < 5; day++) {
						doc.schedule[day].freeTimes.forEach((time) => {
							everyone.schedule[day].freeTimes.push(time);
						});
					}
				});
				everyone.schedule.forEach((day) => {
					day.freeTimes.sort((time1, time2) => {
						if (time1.time > time2.time) return 1;
						return -1;
					});
				});
				const doctorsRes = [everyone, ...res.data];
				props.handleDoctorsChange(doctorsRes);
			}).catch(error => {
				console.log(error);
			});
	}, [weekDays]);

	const previousWeek = () => {
		if (!isPrevWeekAvailable) {
			return;
		}
		let newWeek = getNewDays(-7);
		if (newWeek[0] < new Date()) {
			setIsPrevWeekAvailable(false);
		}
		setIsNextWeekAvailable(true);
		setWeekDays(newWeek);
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
		setWeekDays(newWeek);
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
		<div className={`calendar ${props.error && 'error-calendar'}`}>
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
								{ii == 0 ? <span>Brak wolnych terminów</span> : <></>}
							</div>
						)
					})}
				</div>
				{props.doctors.length === 0 ? <span>Wybierz lekarza aby zobaczyć dostępne godziny</span> : <></>}
			</div>
			{props.error && <span className="error-text">{props.error}</span>}
		</div>
	)
}

export default Calendar