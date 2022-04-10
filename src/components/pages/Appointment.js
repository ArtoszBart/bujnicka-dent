import '../../styles/main.scss';
import FormInput from './../fragments/forms/FormInput';
import AgreementBox from './../fragments/forms/AgreementBox';
import CalendarForm from './../fragments/forms/Calendar';
import useAppointmentForm from './../fragments/forms/customHooks/useAppointmentForm';

function Appointment() {

	const { doctors, handleDoctorsChange, handleChange, handleSubmit, values, errors } = useAppointmentForm();

	return (
		<main className="page-wrapper wait-wrapper" role="main">
			<div className="banner" id="appointments">
				<div className="banner-title">
					<h1><i>Zapis na wizytę</i></h1>
				</div>
			</div>
			<article className="page-content">
				<h2>Zapisz się na wizytę</h2>
				<p>Zapisy mogą być do miesiąca w przód</p>
				<form className="contact-form appointment" onSubmit={handleSubmit} noValidate>
					<div className="contact-form-text">
						<FormInput
							type="text"
							name="firstName"
							placeholder="Imię"
							tabIndex="1"
							value={values.firstName}
							onChange={handleChange}
							error={errors.firstName}
						/>
						<FormInput
							type="text"
							name="lastName"
							placeholder="Nazwisko"
							tabIndex="2"
							value={values.lastName}
							onChange={handleChange}
							error={errors.lastName}
						/>
						<FormInput
							type="text"
							name="phoneNo"
							placeholder="Numer telefonu"
							tabIndex="3"
							value={values.phoneNo}
							onChange={handleChange}
							error={errors.phoneNo}
						/>
						<div className="contact-form-input">
							<label htmlFor="description">Opis</label>
							<textarea
								className={errors.description && 'error-input'}
								name="description"
								id="description"
								placeholder="Opis"
								cols="30"
								rows="5"
								tabIndex="4"
								value={values.description}
								onChange={handleChange}
							>
							</textarea>
							{errors.description && <span className="error-text">{errors.description}</span>}
						</div>
						<div className="contact-form-input select-input">
							<label htmlFor="description">Lekarz</label>
							<select
								className={errors.doctorId && 'error-input'}
								onChange={(e) => handleChange(e)}
								name="doctorId"
								id="doctorId"
								tabIndex="5"
								defaultValue={'default'}
							>
								<option value={'default'} disabled hidden>{'Wybierz lekarza...'}</option>
								{doctors.map((doctor, index) => (
									<option
										key={index}
										value={doctor.id}
									>
										{`${doctor.firstName} ${doctor.lastName}`}
									</option>
								))}
							</select>
							{errors.doctorId && <span className="error-text">{errors.doctorId}</span>}
						</div>
						<AgreementBox
							type="checkbox"
							name="agreement"
							placeholder="Zgadzam się"
							tabIndex="7"
							value={values.agreement}
							onChange={handleChange}
							error={errors.agreement}
						/>
						<input type="submit" className="submit" value="Zapisz się" tabIndex="8" />
					</div>
					<CalendarForm
						tabIndex="6"
						values={values}
						doctors={doctors}
						handleDoctorsChange={handleDoctorsChange}
						handleChange={handleChange}
						error={errors.date}
					/>
				</form>
			</article>
		</main>
	);
}

export default Appointment;
