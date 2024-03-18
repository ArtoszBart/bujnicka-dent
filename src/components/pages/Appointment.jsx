import FormInput from '../fragments/forms/FormInput';
import AgreementBox from '../fragments/forms/AgreementBox';
import CalendarForm from '../fragments/forms/Calendar';
import useAppointmentForm from '../fragments/forms/customHooks/useAppointmentForm';
import ParallaxBaner from '../fragments/ParallaxBanner';
import { useEffect } from 'react';
import SuccessPage from '../fragments/forms/SuccessPage';
import CircleLoader from 'react-spinners/CircleLoader';

function Appointment() {
	const {
		doctors,
		handleChange,
		handleSubmit,
		values,
		errors,
		submitInfo,
		docsFetched,
		isSuccess,
	} = useAppointmentForm();

	useEffect(() => {
		console.log('values', values);
	}, [values]);

	const getDefaultOptionText = () => {
		switch (docsFetched) {
			case null:
				return 'Pobieranie lekarzy...';
			case true:
				return 'Wybierz lekarza...';
			default:
				return 'Nie można pobrać lekarzy!';
		}
	};

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
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='appointments' text='Zapisz się na wizytę' />
			<article className='page-content'>
				{!isSuccess ? (
					<form
						className='contact-form appointment'
						onSubmit={handleSubmit}
						noValidate
					>
						<FormInput
							type='text'
							name='firstName'
							placeholder='Imię'
							tabIndex='1'
							value={values.firstName}
							onChange={handleChange}
							error={errors.firstName}
						/>

						<FormInput
							type='text'
							name='lastName'
							placeholder='Nazwisko'
							tabIndex='2'
							value={values.lastName}
							onChange={handleChange}
							error={errors.lastName}
						/>

						<FormInput
							type='text'
							name='phoneNo'
							placeholder='Numer telefonu'
							tabIndex='3'
							value={values.phoneNo}
							onChange={handleChange}
							error={errors.phoneNo}
						/>

						<div className='contact-form-input'>
							<label htmlFor='description'>Opis</label>
							<textarea
								className={errors.description && 'error-input'}
								name='description'
								id='description'
								placeholder='Opis (opcjonalnie)'
								cols='30'
								rows='5'
								tabIndex='4'
								value={values.description}
								onChange={handleChange}
							></textarea>
							{errors.description && (
								<span className='error-text'>
									{errors.description}
								</span>
							)}
						</div>

						<div className='contact-form-input select-input'>
							<label htmlFor='doctor'>Lekarz</label>
							<select
								className={errors.doctor && 'error-input'}
								onChange={(e) => handleChange(e)}
								name='doctor'
								id='doctor'
								tabIndex='5'
								disabled={!docsFetched}
							>
								<option value={''} hidden>
									{getDefaultOptionText()}
								</option>
								{doctors.map((doctor, index) => (
									<option key={index} value={doctor.id}>
										{`${doctor.firstName} ${doctor.lastName}`}
									</option>
								))}
							</select>
							{errors.doctor && (
								<span className='error-text'>
									{errors.doctor}
								</span>
							)}
						</div>

						<CalendarForm
							tabIndex='6'
							doctorId={values.doctor}
							handleChange={handleChange}
							value={values.date}
							error={errors.date}
						/>
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
								{submitInfo.sending && (
									<CircleLoader color='#3fbbd1' />
								)}
								{` ${submitInfo.message}`}
							</span>
						</div>
						<input
							type='submit'
							className='submit button'
							value='Zapisz się'
							tabIndex='8'
						/>
					</form>
				) : (
					<SuccessPage
						values={values}
						doctor={doctors.find((d) => d.id === values.doctor)}
					/>
				)}
			</article>
		</main>
	);
}

export default Appointment;
