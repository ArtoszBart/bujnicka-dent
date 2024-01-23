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

	useEffect(() => {
		setIsNextWeekAvailable(weekNo >= 3 ? false : true);
		setIsPrevWeekAvailable(weekNo <= 0 ? false : true);
	}, [weekNo]);

	const fetchFreeDates = () => {
		axios
			.get(
				`http://localhost:3000/api/employees/${doctorId}/schedule?week=${weekNo}`
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
		setWeekNo((thisWeekNo) => thisWeekNo - 1);
		setWeekDays(getNewDays(-7));
	};

	const nextWeek = () => {
		if (!isNextWeekAvailable) {
			return;
		}

		setWeekNo((thisWeekNo) => thisWeekNo + 1);
		setWeekDays(getNewDays(7));
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
