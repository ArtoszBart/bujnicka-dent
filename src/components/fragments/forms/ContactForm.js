import React from 'react';
import useContactForm from './customHooks/useContactForm';
import FormInput from './FormInput';

function ContactForm() {
	const { handleChange, handleSubmit, values, errors, sent } = useContactForm();



	return (
		<form className="contact-form" onSubmit={handleSubmit} noValidate>
			<h3>Napisz do nas!</h3>
			<FormInput
				type="text"
				name="name"
				placeholder="Imię"
				className="contact-form-input"
				tabIndex="1"
				value={values.name}
				onChange={handleChange}
				error={errors.name}
			/>
			<FormInput
				type="email"
				name="email"
				placeholder="Adres email"
				className="contact-form-input"
				tabIndex="2"
				value={values.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<FormInput
				type="text"
				name="subject"
				placeholder="Temat"
				className="contact-form-input"
				tabIndex="3"
				value={values.subject}
				onChange={handleChange}
				error={errors.subject}
			/>

			<div className="contact-form-message">
				<label htmlFor="message">Treść wiadomości</label>
				<textarea
					name="message"
					id="message"
					placeholder="Treść wiadomości"
					cols="30"
					rows="5"
					className="contact-form-input"
					tabIndex="4"
					value={values.message}
					onChange={handleChange}
				>
				</textarea>
				{errors.message && <span className="error-text">{errors.message}</span>}
			</div>
			{/* <button className="submit" type="submit" tabIndex="5">
				<i class="fa fa-spinner fa-spin"></i>{sent}
			</button> */}
			<div>
				<span className="info">
					{sent === '{sending...}' ? <><i className="fa fa-spinner fa-spin"></i>Wysyłanie</> : sent}
				</span>
			</div>
			{/* {sent &&
				<PopupWindow delay="2000" />
			} */}
			<input type="submit" className="submit" value="Wyślij wiadomość" tabIndex="5" />
		</form>
	);
}

export default ContactForm;
