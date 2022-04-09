import { useState } from "react";
import validate from './../validation/validateContactForm';
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

	});

	const [doctors, setDoctors] = useState([]);
	const [errors, setErrors] = useState({});
	const [submitInfo, setSubmitInfo] = useState({});

	const handleChange = e => {
		let { name, value } = e.target;
		if (e.target.checked) {
			value = e.target.checked
		}
		setValues({
			...values,
			[name]: value
		});
	};

	const handleDoctorsChange = docs => {
		setDoctors(docs)
	};

	const handleSubmit = e => {
		e.preventDefault();
		// const currentErrors = validate(values)
		// setErrors(currentErrors);
		// if (Object.keys(currentErrors).length !== 0) {
		// 	return;
		// }
	}

	return { doctors, handleDoctorsChange, handleChange, handleSubmit, values, errors, submitInfo };
};

export default useContactForm;