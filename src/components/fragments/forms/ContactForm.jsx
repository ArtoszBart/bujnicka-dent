import React from 'react';
import useContactForm from './customHooks/useContactForm';
import FormInput from './FormInput';
import AgreementBox from './AgreementBox';
import CircleLoader from 'react-spinners/CircleLoader';

function ContactForm() {
	const { handleChange, handleSubmit, values, errors, submitInfo } =
		useContactForm();

	const getInfoClassName = () => {
		switch (submitInfo.success) {
			case true:
				return 'success-message';
			case false:
				return 'error-message';
			default:
				return '';
		}
	};

	return (
		<div>
			<h3>Napisz do nas!</h3>
			<form className='contact-form' noValidate>
				<FormInput
					type='text'
					name='name'
					placeholder='Imię'
					tabIndex='1'
					value={values.name}
					onChange={handleChange}
					error={errors.name}
				/>
				<FormInput
					type='email'
					name='email'
					placeholder='Adres email'
					tabIndex='2'
					value={values.email}
					onChange={handleChange}
					error={errors.email}
				/>
				<FormInput
					type='text'
					name='subject'
					placeholder='Temat'
					tabIndex='3'
					value={values.subject}
					onChange={handleChange}
					error={errors.subject}
				/>

				<div className='contact-form-input'>
					<label htmlFor='message'>Treść wiadomości</label>
					<textarea
						className={errors.message && 'error-input'}
						name='message'
						id='message'
						placeholder='Treść wiadomości'
						cols='30'
						rows='5'
						tabIndex='4'
						value={values.message}
						onChange={handleChange}
					></textarea>
					{errors.message && (
						<span className='error-text'>{errors.message}</span>
					)}
				</div>
				<AgreementBox
					type='checkbox'
					name='agreement'
					placeholder='Zgadzam się'
					tabIndex='7'
					value={values.agreement}
					onChange={handleChange}
					error={errors.agreement}
				/>
				<div className='contact-form-info'>
					<span className={getInfoClassName()}>
						{submitInfo.sending && <CircleLoader color='#3fbbd1' />}
						{` ${submitInfo.message}`}
					</span>
				</div>
				<div
					type='submit'
					className='submit button'
					onClick={handleSubmit}
					tabIndex='5'
				>
					Wyślij wiadomość
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
