import React, { useRef, useState } from 'react';
import { checkRequired, checkTextLengthRange, checkEmail } from '../../../helpers/validationCommon';
import FormInput from './FormInput';

function ContactForm() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const subjectRef = useRef(null);
	const messageRef = useRef(null);

	const [isNameValid, setNameValid] = useState(false);
	const [isEmailValid, setEmailValid] = useState(false);
	const [isSubjectValid, setSubjectValid] = useState(false);
	const [isMessageValid, setMessageValid] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!(isNameValid && isEmailValid && isSubjectValid && isMessageValid)) {
			console.log("not valid!!!")
			return
		}
		const data = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			subject: subjectRef.current.value,
			message: messageRef.current.value
		}
		// document.querySelector('.popup-window').classList.remove('hidden');
		console.log(JSON.stringify(data));
	}

	const validateField = (e) => {
		let errorText = '';
		if (e.target.id === 'name') {
			if (!checkRequired(e.target.value)) {
				setNameValid(false);
				errorText = 'Imię nie może być puste';
			} else if (!checkTextLengthRange(e.target.value, 2, 30)) {
				setNameValid(false);
				errorText = 'Imię musi mieć od 2 do 30 znaków';
			} else { setNameValid(true); }
		}
		else if (e.target.id === 'email') {
			if (!checkRequired(e.target.value)) {
				setEmailValid(false);
				errorText = 'Email nie może być pusty';
			} else if (!checkEmail(e.target.value)) {
				setEmailValid(false);
				errorText = 'Niepoprawny adres email';
			} else { setEmailValid(true); }
		}
		else if (e.target.id === 'subject') {
			if (!checkRequired(e.target.value)) {
				setSubjectValid(false);
				errorText = 'Temat nie może być pusty';
			} else if (!checkTextLengthRange(e.target.value, 10, 50)) {
				setSubjectValid(false);
				errorText = 'Temat musi mieć od 10 do 50 znaków';
			} else { setSubjectValid(true); }
		}
		else if (e.target.id === 'message') {
			if (!checkRequired(e.target.value)) {
				setMessageValid(false);
				errorText = 'Treść nie może być pusta';
			} else if (!checkTextLengthRange(e.target.value, 10, 300)) {
				setMessageValid(false);
				errorText = 'Treść musi mieć od 10 do 300 znaków';
			} else { setMessageValid(true); }
		}

		if (errorText !== '') {
			e.target.classList.add('error-input');
		} else {
			e.target.classList.remove('error-input');
		}
		document.getElementById(`${e.target.id}Error`).textContent = errorText;
	}

	return (

		<form className="contact-form" onSubmit={handleSubmit} noValidate>
			<h3>Napisz do nas!</h3>
			<FormInput type="text" id="name" placeholder="Imię" className="contact-form-input" tabIndex="1" forwardedRef={nameRef} onChange={validateField} />
			<FormInput type="email" id="email" placeholder="Adres email" className="contact-form-input" tabIndex="2" forwardedRef={emailRef} onChange={validateField} />
			<FormInput type="text" id="subject" placeholder="Temat" className="contact-form-input" tabIndex="3" forwardedRef={subjectRef} onChange={validateField} />

			<div className="contact-form-message">
				<textarea id="message" placeholder="Treść wiadomości" cols="30" rows="5" className="contact-form-input" tabIndex="4" ref={messageRef} onChange={validateField}></textarea>
				<span className="error-text" id="messageError"></span>
			</div>
			<input type="submit" className="submit" value="Send message" tabIndex="5" />
		</form>

	);
}

export default ContactForm;
