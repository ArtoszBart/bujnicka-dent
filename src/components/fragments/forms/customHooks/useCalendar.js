import { useEffect, useState } from 'react';
import axios from 'axios';

import { formatDateSql } from '../../../../helpers/dateAndTime';

const useCalendar = (doctorId) => {
	const [isPrevWeekAvailable, setIsPrevWeekAvailable] = useState(false);
	const [isNextWeekAvailable, setIsNextWeekAvailable] = useState(true);
	const [freeSlots, setfreeSlots] = useState([]);
	const [freeSlotsFetched, setFreeSlotsFetched] = useState();
	const [weekDays, setWeekDays] = useState(getInitWeek());
	const [weekNo, setWeekNo] = useState(0);

	useEffect(() => {
		if (doctorId) fetchFreeDates();
	}, [doctorId, weekDays]);

	const fetchFreeDates = () => {
		axios
			.get(
				`http://localhost:3000/api/doctors/${doctorId}/schedule?week=${weekNo}`
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
		const newWeek = getNewDays(-7);
		if (weekNo <= 1) {
			setIsPrevWeekAvailable(false);
		}
		setIsNextWeekAvailable(true);
		setWeekNo((asd) => asd - 1);
		setWeekDays(newWeek);
	};

	const nextWeek = () => {
		if (!isNextWeekAvailable) {
			return;
		}
		const newWeek = getNewDays(7);
		if (weekNo >= 3) {
			setIsNextWeekAvailable(false);
		}
		setIsPrevWeekAvailable(true);
		setWeekNo((asd) => asd + 1);
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
	const today = new Date();
	let dayOfWeek = today.getDay() - 1;
	let monday = new Date();
	monday.setDate(monday.getDate() - dayOfWeek);

	let thisWeek = [];
	for (let ii = 0; ii < 7; ii++) {
		const nextDay = new Date(monday);
		nextDay.setDate(nextDay.getDate() + ii);
		thisWeek.push(nextDay);
	}
	return thisWeek;
}

export default useCalendar;
