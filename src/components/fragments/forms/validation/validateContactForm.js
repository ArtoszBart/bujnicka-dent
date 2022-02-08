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