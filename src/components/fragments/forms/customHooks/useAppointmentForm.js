import { useState } from "react";
import validate from './../validation/validateAppointment';
import { sendingState, getSuccessState, getErrorState } from '../../../../helpers/sendingStates';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';
import { formatDateSql } from './../../../../helpers/dateAndTime';

const useContactForm = () => {
	const [doctors, setDoctors] = useState([]);
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({ message: '' });
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phoneNo: '',
		description: '',
		doctorId: '',
		date: '',
		agreement: false
	});
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

	const handleChange = e => {
		let { name, value } = e.target;
		if (e.target.type === 'checkbox') {
			value = e.target.checked
		}
		setValues({
			...values,
			[name]: value
		});
		deleteErrors(name);
	};

	const deleteErrors = fieldName => {
		const oldErrors = errors;
		delete oldErrors[fieldName];
		setErrors(oldErrors);
	}

	const getFreeDates = () => {
		const dateFrom = formatDateSql(weekDays[0]);
		const dateTo = formatDateSql(weekDays[weekDays.length - 1]);
		axios.get(`http://192.168.0.95:4000/api/doctors/${dateFrom},${dateTo}`)
			.then(res => {
				setDoctors(res.data);
			}).catch(error => {
				console.log(error);
			});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(values);
		const currentErrors = validate(values)
		setErrors(currentErrors);
		if (Object.keys(currentErrors).length !== 0) {
			// return;
		}

		setSubmitInfo(sendingState);

		axios.post('http://localhost:4000/api/appointments/new', values).then(res => {
			const doctor = doctors.find(doc => values.doctorId === doc.id.toString());
			setSubmitInfo(getSuccessState(doctor, values.date));
			setValues({
				firstName: '',
				lastName: '',
				phoneNo: '',
				description: '',
				doctorId: '',
				date: '',
				agreement: false
			});
			getFreeDates();
		}).catch(error => {
			// 400 - validation;
			// 502 - bad gateway;
			// 512 - unable to connect to server
			let code;
			if (error.response) {
				if (error.response.status === 400) {
					setErrors(decodeErrorMessages(error.response.data));
				} else {
					code = error.response.status;
				}
			} else {
				code = 512;
			}
			setSubmitInfo(getErrorState(code));
		});
	}

	return { doctors, handleChange, handleSubmit, values, errors, submitInfo, weekDays, setWeekDays, getFreeDates };
};

export default useContactForm;