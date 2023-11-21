import {
	checkRequired,
	checkTextLengthRange,
	checkRegex,
	decodeErrorMessages,
} from './../../../../helpers/validationCommon';

export default function validateContactForm(values) {
	let errors = {};

	if (!checkRequired(values.name)) {
		errors.name = 'required';
	} else if (!checkTextLengthRange(values.name, 2, 30)) {
		errors.name = 'length';
	}

	if (!checkRequired(values.email)) {
		errors.email = 'required';
	} else if (!checkTextLengthRange(values.email, 6, 50)) {
		errors.email = 'length';
	} else if (
		!checkRegex(
			values.email,
			/^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?@[a-zA-Z-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/
		)
	) {
		errors.email = 'format';
	}

	if (!checkRequired(values.subject)) {
		errors.subject = 'required';
	} else if (!checkTextLengthRange(values.subject, 3, 30)) {
		errors.subject = 'length';
	}

	if (!checkRequired(values.message)) {
		errors.message = 'required';
	} else if (!checkTextLengthRange(values.message, 10, 300)) {
		errors.message = 'length';
	}

	if (!values.agreement) {
		errors.agreement = 'required';
	}

	return decodeErrorMessages(errors);
}
