export function isStringTimeLaterThan(date1, date2) {
	const date1Int = date1.split(':').map((d) => {
		return parseInt(d);
	});
	const date2Int = date2.split(':').map((d) => {
		return parseInt(d);
	});

	if (date1Int[0] >= date2Int[0]) return true;
	else return false;
}

export function addHourToStringTime(date) {
	const dateArr = date.split(':');
	const hour = parseInt(dateArr[0]) + 1;
	dateArr[0] = hour.toString();

	return dateArr.join(':');
}

export function formatDateShort(date) {
	const days = ['pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'so.'];
	const weekDay = days[date.getDay() - 1];
	const day = date.getDate();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	var stringDate = `${weekDay} ${day}.${month}`;
	return stringDate;
}

export function formatDateLong(date) {
	const day = date.getDate();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	var stringDate = `${day}.${month}.${year}`;
	return stringDate;
}

export function formatDateSql(date) {
	if (!date) {
		return;
	}
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	var stringDate = `${year}-${month}-${day}`;
	return stringDate;
}
