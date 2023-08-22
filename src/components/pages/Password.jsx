import FormInput from '../fragments/forms/FormInput';
import usePassword from '../fragments/forms/customHooks/usePassword';

const Password = () => {
	const {
		isSuccess,
		values,
		errors,
		submitInfo,
		handleSubmit,
		handleChange,
		getInfoClassName,
	} = usePassword();

	return (
		<main className='page-wrapper' role='main'>
			<div className='banner' id='not-found'>
				<div className='banner-title'>
					<h1>
						<i>Zmiana hasła</i>
					</h1>
				</div>
			</div>
			<article className='page-content'>
				<h2>Wypełnij poniższe dane:</h2>
				{!isSuccess ? (
					<form
						className='contact-form'
						onSubmit={handleSubmit}
						noValidate
					>
						<FormInput
							type='email'
							name='email'
							placeholder='Adres email'
							tabIndex='1'
							value={values.email}
							onChange={handleChange}
							error={errors.email}
						/>
						<FormInput
							type='password'
							name='password'
							placeholder='Hasło'
							tabIndex='2'
							value={values.password}
							onChange={handleChange}
							error={errors.password}
						/>
						<FormInput
							type='password'
							name='passwordR'
							placeholder='Potwierdź hasło'
							tabIndex='3'
							value={values.passwordR}
							onChange={handleChange}
							error={errors.passwordR}
						/>
						<div className='contact-form-info'>
							<span className={getInfoClassName()}>
								{submitInfo.sending && (
									<i className='fa fa-spinner fa-spin'></i>
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
					<p>ok</p>
					// <SuccessPage
					// 	values={values}
					// 	doctor={doctors.find((d) => d.id == values.doctorId)}
					// />
				)}
			</article>
		</main>
	);
};

export default Password;
