import { useEffect, useState } from 'react';
import validate from './../validation/validateAppointment';
import {
	resetState,
	sendingState,
	errorState,
	getErrorState,
} from '../../../../helpers/sendingStates';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';

const useAppointmentForm = () => {
	const [docsFetched, setDocsFetched] = useState(null);
	const [doctors, setDoctors] = useState([]);
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({ message: '' });
	const [isSuccess, setIsSuccess] = useState(false);
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phoneNo: '',
		description: '',
		doctor: '',
		date: '',
		agreement: false,
	});

	const handleChange = (e) => {
		let { name, value } = e.target;

		if (e.target.type === 'checkbox') {
			value = e.target.checked;
		} else if (e.target.type === 'select-one') {
			value = Number(value);
			values.date = '';
		}

		setValues({
			...values,
			[name]: value,
		});

		setSubmitInfo(resetState);
		deleteErrors(name);
	};

	const deleteErrors = (fieldName) => {
		const oldErrors = errors;
		delete oldErrors[fieldName];
		setErrors(oldErrors);
	};

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/employees/doctors`)
			.then((res) => {
				setDoctors(res.data);
				setDocsFetched(true);
			})
			.catch((error) => {
				setDocsFetched(false);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentErrors = validate(values);
		setErrors(currentErrors);

		if (Object.keys(currentErrors).length !== 0) {
			setSubmitInfo(errorState);
			return;
		}

		setSubmitInfo(sendingState);

		axios
			.post('http://localhost:3000/api/appointments/', values)
			.then(() => {
				setIsSuccess(true);
			})
			.catch((error) => {
				// 400 - validation;
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

	return {
		doctors,
		handleChange,
		handleSubmit,
		values,
		errors,
		submitInfo,
		docsFetched,
		isSuccess,
	};
};

export default useAppointmentForm;
