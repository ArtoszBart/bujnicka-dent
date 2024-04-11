import FormInput from '../fragments/forms/FormInput';
import AgreementBox from '../fragments/forms/AgreementBox';
import CalendarForm from '../fragments/forms/Calendar';
import useAppointmentForm from '../fragments/forms/customHooks/useAppointmentForm';
import ParallaxBaner from '../fragments/ParallaxBanner';
import SuccessPage from '../fragments/forms/SuccessPage';
import CircleLoader from 'react-spinners/CircleLoader';
import { FaIdCard, FaMessage, FaPhone, FaUserDoctor } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

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
							Icon={<FaIdCard />}
						/>

						<FormInput
							type='text'
							name='lastName'
							placeholder='Nazwisko'
							tabIndex='2'
							value={values.lastName}
							onChange={handleChange}
							error={errors.lastName}
							Icon={<FaIdCard />}
						/>

						<FormInput
							type='text'
							name='phoneNo'
							placeholder='Numer telefonu'
							tabIndex='3'
							value={values.phoneNo}
							onChange={handleChange}
							error={errors.phoneNo}
							Icon={<FaPhone />}
						/>

						<FormInput
							type='text-area'
							name='description'
							placeholder='Opis (opcjonalnie)'
							tabIndex='4'
							value={values.message}
							onChange={handleChange}
							error={errors.message}
							Icon={<FaMessage />}
						/>

						<div className='contact-form-input select-input'>
							<label htmlFor='doctor'>Lekarz</label>
							<div className='contact-form-input-box'>
								<IconContext.Provider
									value={{
										className: 'form-icon select',
									}}
								>
									<FaUserDoctor />
								</IconContext.Provider>
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
							</div>
							<span className='error-text'>{errors.doctor}</span>
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
							{submitInfo.sending && (
								<CircleLoader color='#1b3c7b' size={30} />
							)}
							<span className={getInfoClassName()}>
								{`${submitInfo.message}`}
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
