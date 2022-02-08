import { useState } from "react";
import validate from './../validation/validateContactForm';
import axios from 'axios';

const useContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(null);

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
		// API CALL HERE
		axios.post('http://localhost:4000/api/email/send', values).then(res => {
			setSent("Wysłano");
			// setValues({
			// 	name: '',
			// 	email: '',
			// 	subject: '',
			// 	message: ''
			// });
		}).catch(error => {
			console.log("XD");
			// console.error(error.response.status);
		});

	}

	return { handleChange, handleSubmit, values, errors, sent };
};

export default useContactForm;