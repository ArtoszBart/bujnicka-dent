import FormInput from '../fragments/forms/FormInput';
import AgreementBox from '../fragments/forms/AgreementBox';
import CalendarForm from '../fragments/forms/Calendar';
import useAppointmentForm from '../fragments/forms/customHooks/useAppointmentForm';
import ParallaxBaner from '../fragments/ParallaxBanner'

function Appointment() {

	const { doctors, handleChange, handleSubmit, values, errors, submitInfo, weekDays, setWeekDays, getFreeDates, docsFetched } = useAppointmentForm();

	const getDefaultOptionText = () => {
		switch (docsFetched) {
			case null: return "Pobieranie lekarzy...";
			case true: return "Wybierz lekarza...";
			default: return "Nie można pobrać lekarzy!";
		}
	}

	const getInfoClassName = () => {
		switch (submitInfo.success) {
			case true: return 'success-message';
			case false: return 'error-message';
			default: return '';
		}
	}

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="appointments" text="Zapis na wizytę" />
			<article className="page-content">
				<h2>Zapisz się na wizytę</h2>
				<form className="contact-form appointment" onSubmit={handleSubmit} noValidate>
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
							placeholder="Opis (opcjonalnie)"
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
							value={values.doctorId}
							disabled={!docsFetched}
						>
							<option value={''} disabled hidden>{getDefaultOptionText()}</option>
							{doctors.map((doctor, index) =>
								<option
									key={index}
									value={doctor.id}
								>
									{`${doctor.firstName} ${doctor.lastName}`}
								</option>
							)}
						</select>
						{errors.doctorId && <span className="error-text">{errors.doctorId}</span>}
					</div>
					<CalendarForm
						tabIndex="6"
						values={values}
						doctors={doctors}
						weekDays={weekDays}
						setWeekDays={setWeekDays}
						getFreeDates={getFreeDates}
						handleChange={handleChange}
						error={errors.date}
					/>
					<AgreementBox
						type="checkbox"
						name="agreement"
						placeholder="Zgadzam się"
						tabIndex="7"
						value={values.agreement}
						onChange={handleChange}
						error={errors.agreement}
					/>
					<div className="contact-form-info">
						<span className={getInfoClassName()}>
							{submitInfo.sending && <i className="fa fa-spinner fa-spin"></i>}{` ${submitInfo.message}`}
						</span>
					</div>
					<input type="submit" className="submit button" value="Zapisz się" tabIndex="8" />
				</form>
			</article>
		</main>
	);
}

export default Appointment;
