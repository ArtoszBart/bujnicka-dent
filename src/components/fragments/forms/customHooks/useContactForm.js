import { useState } from 'react';
import validate from './../validation/validateContactForm';
import {
	sendingState,
	successStateSending,
	getErrorState,
} from './../../../../helpers/sendingStates';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';

const useContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		agreement: false,
	});
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({ message: '' });

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (e.target.type === 'checkbox') {
			value = e.target.checked;
		}
		setValues({
			...values,
			[name]: value,
		});
		deleteErrors(name);
	};

	const deleteErrors = (fieldName) => {
		const oldErrors = errors;
		delete oldErrors[fieldName];
		setErrors(oldErrors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentErrors = validate(values);
		setErrors(currentErrors);
		if (Object.keys(currentErrors).length !== 0) {
			return;
		}

		setSubmitInfo(sendingState);
		// API CALL
		axios
			.post('/api/email/send', values)
			.then((res) => {
				setSubmitInfo(successStateSending);
				setValues({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			})
			.catch((error) => {
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
	};

	return { handleChange, handleSubmit, values, errors, submitInfo };
};

export default useContactForm;
