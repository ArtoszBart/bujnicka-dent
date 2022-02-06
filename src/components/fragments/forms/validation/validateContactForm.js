import { checkRequired, checkTextLengthRange, checkEmail } from './../../../../helpers/validationCommon';

export default function validateContactForm(values) {
	let errors = {}

	if (!checkRequired(values.name)) {
		errors.name = 'Imię nie może być puste';
	} else if (!checkTextLengthRange(values.name, 2, 30)) {
		errors.name = 'Imię musi mieć od 2 do 30 znaków';
	}

	if (!checkRequired(values.email)) {
		errors.email = 'Email nie może być pusty';
	} else if (!checkEmail(values.email)) {
		errors.email = 'Niepoprawny adres email';
	}

	if (!checkRequired(values.subject)) {
		errors.subject = 'Temat nie może być pusty';
	} else if (!checkTextLengthRange(values.subject, 10, 50)) {
		errors.subject = 'Temat musi mieć od 10 do 50 znaków';
	}

	if (!checkRequired(values.message)) {
		errors.message = 'Treść nie może być pusta';
	} else if (!checkTextLengthRange(values.message, 10, 300)) {
		errors.message = 'Treść musi mieć od 10 do 300 znaków';
	}

	return errors;
};

const validateField = (e) => {
	let errorText = '';
	if (e.target.id === 'name') {
		if (!checkRequired(e.target.value)) {
			errorText = 'Imię nie może być puste';
		} else if (!checkTextLengthRange(e.target.value, 2, 30)) {
			errorText = 'Imię musi mieć od 2 do 30 znaków';
		}
	}
	else if (e.target.id === 'email') {
		if (!checkRequired(e.target.value)) {
			errorText = 'Email nie może być pusty';
		} else if (!checkEmail(e.target.value)) {
			errorText = 'Niepoprawny adres email';
		}
	}
	else if (e.target.id === 'subject') {
		if (!checkRequired(e.target.value)) {
			errorText = 'Temat nie może być pusty';
		} else if (!checkTextLengthRange(e.target.value, 10, 50)) {
			errorText = 'Temat musi mieć od 10 do 50 znaków';
		}
	}
	else if (e.target.id === 'message') {
		if (!checkRequired(e.target.value)) {
			errorText = 'Treść nie może być pusta';
		} else if (!checkTextLengthRange(e.target.value, 10, 300)) {
			errorText = 'Treść musi mieć od 10 do 300 znaków';
		}
	}

	if (errorText !== '') {
		e.target.classList.add('error-input');
	} else {
		e.target.classList.remove('error-input');
	}
}