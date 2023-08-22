import { useEffect, useState } from 'react';
import axios from 'axios';

import { formatDateSql } from '../../../../helpers/dateAndTime';

const useCalendar = (doctorId) => {
	const [isPrevWeekAvailable, setIsPrevWeekAvailable] = useState(false);
	const [isNextWeekAvailable, setIsNextWeekAvailable] = useState(true);
	const [freeSlots, setfreeSlots] = useState([]);
	const [freeSlotsFetched, setFreeSlotsFetched] = useState();
	const [weekDays, setWeekDays] = useState(getInitWeek());

	useEffect(() => {
		if (doctorId) fetchFreeDates();
	}, [doctorId, weekDays]);

	const fetchFreeDates = () => {
		const dateFrom = formatDateSql(weekDays[0]);
		const dateTo = formatDateSql(weekDays[weekDays.length - 1]);
		axios
			.get(
				`http://localhost:3000/api/doctors/${doctorId}/${dateFrom},${dateTo}`
			)
			.then((res) => {
				setfreeSlots(res.data);
				setFreeSlotsFetched(true);
			})
			.catch((error) => {
				setFreeSlotsFetched(false);
			});
	};

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
		setWeekDays(newWeek);
	};

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
	};

	const getNewDays = (days) => {
		let newWeek = [];
		weekDays.forEach((weekDay) => {
			const day = new Date(weekDay);
			day.setDate(day.getDate() + days);
			newWeek.push(day);
		});
		return newWeek;
	};

	return {
		isPrevWeekAvailable,
		isNextWeekAvailable,
		weekDays,
		freeSlots,
		freeSlotsFetched,
		previousWeek,
		nextWeek,
	};
};

function getInitWeek() {
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
		const nextDay = new Date(monday);
		nextDay.setDate(nextDay.getDate() + ii);
		thisWeek.push(nextDay);
	}
	return thisWeek;
}

export default useCalendar;
