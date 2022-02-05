import React, { useRef, useState } from 'react';
import { checkRequired, checkTextLengthRange, checkEmail } from '../../helpers/validationCommon';

function Contact() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const subjectRef = useRef(null);
	const messageRef = useRef(null);
	const [isFormValid, setFormValid] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// if()
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
				errorText = 'Imię nie może być puste';
			} else if (!checkTextLengthRange(e.target.value, 2, 30)) {
				errorText = 'Imię musi mieć od 2 do 30 znaków';
			}
		}

		if (e.target.id === 'email') {
			if (!checkRequired(e.target.value)) {
				errorText = 'Email nie może być pusty';
			} else if (!checkEmail(e.target.value)) {
				errorText = 'Niepoprawny adres email';
			}
		}

		if (e.target.id === 'subject') {
			if (!checkRequired(e.target.value)) {
				errorText = 'Temat nie może być pusty';
			} else if (!checkTextLengthRange(e.target.value, 2, 50)) {
				errorText = 'Temat musi mieć od 2 do 50 znaków';
			}
		}

		if (e.target.id === 'Message') {
			if (!checkRequired(e.target.value)) {
				errorText = 'Treść nie może być pusta';
			} else if (!checkTextLengthRange(e.target.value, 3, 300)) {
				errorText = 'Treść musi mieć od 2 do 300 znaków';
			}
		}

		if (errorText !== '') {
			e.target.classList.add('error-input');
		} else {
			e.target.classList.remove('error-input');
		}
		document.getElementById(`${e.target.id}Error`).textContent = errorText;
	}

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="contact">
				<div className="banner-title">
					<h1>Kontakt</h1>
				</div>
			</div>
			<section className="page-content">
				<article className="contact">
					<div className="contact-info">
						<h3>Bujnicka-Dent</h3>
						<address>
							Gabinet Stomatologiczny Magdalena Bujnicka<br />
							ul. Hansa Christiana Andersena 6<br />
							01-911 Warszawa<br />
							<a className="text-link" href="tel:+48609606814">+48 609-606-814</a><br />
							<a className="text-link" href="mailto:magdalena.bujnicka@gmail.com">magdalena.bujnicka@gmail.com</a>
						</address>
					</div>
					<form className="contact-form" onSubmit={handleSubmit} noValidate>
						<h3>Napisz do nas!</h3>
						<div className="contact-form-name">
							<input type="text" id="name" placeholder="Imię" className="contact-form-input" tabIndex="1" ref={nameRef} onChange={validateField} />
							<span className="error-text" id="nameError"></span>
						</div>
						<div className="contact-form-email">
							<input type="email" id="email" placeholder="Adres email" className="contact-form-input" tabIndex="2" ref={emailRef} onChange={validateField} />
							<span className="error-text" id="emailError"></span>
						</div>
						<div className="contact-form-subject">
							<input type="test" id="subject" placeholder="Temat" className="contact-form-input" tabIndex="3" ref={subjectRef} onChange={validateField} />
							<span className="error-text" id="subjectError"></span>
						</div>
						<div className="contact-form-message">
							<textarea id="message" placeholder="Treść wiadomości" cols="30" rows="5" className="contact-form-input" tabIndex="4" ref={messageRef} onChange={validateField}></textarea>
							<span className="error-text" id="messageError"></span>
						</div>
						<input type="submit" className="submit" value="Send message" tabIndex="5" />
					</form>
				</article>

				<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19526.233593659086!2d20.931493567993382!3d52.283710439202004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca33cc1b06f3%3A0xa69120edf8e6db80!2sHansa%20Christiana%20Andersena%206%2C%2001-911%20Warszawa!5e0!3m2!1spl!2spl!4v1644072280081!5m2!1spl!2spl" loading="lazy"></iframe>
			</section>
		</main>
	);
}

export default Contact;
