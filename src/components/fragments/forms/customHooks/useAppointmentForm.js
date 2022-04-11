import { useState } from "react";
import validate from './../validation/validateAppointment';
import { setStateSending, setStateSuccess, setStateError } from './../../../../helpers/sendingState';
import { getErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';

const useContactForm = () => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phoneNo: '',
		description: '',
		doctorId: '',
		date: '',
		agreement: false
	});

	const [doctorScheduleShowing, setDoctorScheduleShowing] = useState(0);
	const [doctors, setDoctors] = useState([]);
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({});

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

	const handleDateSelected = e => {
		const data = e.target.value.split('@');
		setValues({
			...values,
			doctorId: data[0],
			date: data[1]
		});
		deleteErrors('date');
	};

	const deleteErrors = fieldName => {
		const oldErrors = errors;
		delete oldErrors[fieldName];
		setErrors(oldErrors);
	}

	const handleDoctorsChange = docs => {
		setDoctors(docs)
	};

	const handleDoctorChange = e => {
		setValues({
			...values,
			doctorId: '',
			date: ''
		});
		setDoctorScheduleShowing(e.target.value)
	};

	const handleSubmit = e => {
		e.preventDefault();
		const currentErrors = validate(values)
		setErrors(currentErrors);
		if (Object.keys(currentErrors).length !== 0) {
			return;
		}
	}

	return { doctors, handleDoctorsChange, handleDateSelected, handleChange, handleSubmit, values, errors, submitInfo, doctorScheduleShowing, handleDoctorChange };
};

export default useContactForm;