import { useState, useEffect } from "react";
import validate from './../validation/validateContactForm';

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
		if (Object.keys(currentErrors).length === 0) {
			// API CALL HERE
			setSent("Wysłano");
			// alert("Message sent");
			setValues({
				name: '',
				email: '',
				subject: '',
				message: ''
			});
		}
	}

	return { handleChange, handleSubmit, values, errors, sent };
};

export default useContactForm;