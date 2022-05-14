import { useState } from "react";
import validate from './../validation/validateContactForm';
import { sendingState, successStateSending, getErrorState } from './../../../../helpers/sendingStates';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';

const useContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({ message: '' });

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const currentErrors = validate(values)
		setErrors(currentErrors);
		if (Object.keys(currentErrors).length !== 0) {
			return;
		}

		setSubmitInfo(sendingState);
		// API CALL
		axios.post('http://localhost:4000/api/email/send', values).then(res => {
			setSubmitInfo(successStateSending);
			setValues({
				name: '',
				email: '',
				subject: '',
				message: ''
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
			setSubmitInfo(getErrorState(code));
		});
	}

	return { handleChange, handleSubmit, values, errors, submitInfo };
};

export default useContactForm;