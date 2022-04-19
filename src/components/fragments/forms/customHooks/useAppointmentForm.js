import { useState } from "react";
import validate from './../validation/validateAppointment';
import { setStateSending, setStateSuccess, setStateError } from './../../../../helpers/sendingState';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
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

	const [doctors, setDoctors] = useState([]);
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({ message: '' });

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

	const handleDoctorsChange = docs => {
		setDoctors(docs)
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(values);
		const currentErrors = validate(values)
		setErrors(currentErrors);
		if (Object.keys(currentErrors).length !== 0) {
			// return;
		}

		setStateSending(setSubmitInfo);

		axios.post('http://localhost:4000/api/appointments/new', values).then(res => {
			setStateSuccess(setSubmitInfo);
			setValues({
				firstName: '',
				lastName: '',
				phoneNo: '',
				description: '',
				doctorId: '',
				date: '',
				agreement: false
			});
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
			setStateError(setSubmitInfo, code);
		});
	}

	return { doctors, handleDoctorsChange, handleChange, handleSubmit, values, errors, submitInfo };
};

export default useContactForm;