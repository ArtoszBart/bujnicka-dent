import {
	checkRequired,
	checkTextLengthRange,
	checkRegex,
	decodeErrorMessages,
} from './../../../../helpers/validationCommon';

export default function validateAppointment(values, doctors) {
	let errors = {};

	if (!checkRequired(values.firstName)) {
		errors.firstName = 'required';
	} else if (!checkTextLengthRange(values.firstName, 2, 20)) {
		errors.firstName = 'length';
	}

	if (!checkRequired(values.lastName)) {
		errors.lastName = 'required';
	} else if (!checkTextLengthRange(values.lastName, 2, 30)) {
		errors.lastName = 'length';
	}

	if (!checkRequired(values.phoneNo)) {
		errors.phoneNo = 'required';
	} else if (!checkRegex(values.phoneNo, /^\+?[0-9- ]{7,20}$/)) {
		errors.phoneNo = 'format';
	}

	if (!checkTextLengthRange(values.description, 0, 300)) {
		errors.description = 'length';
	}

	// if (!checkRequired(values.doctorId)) {
	//     errors.doctorId = 'required';
	// }

	if (!checkRequired(values.date)) {
		errors.date = 'required';
	}

	if (!values.agreement) {
		errors.agreement = 'required';
	}

	return decodeErrorMessages(errors);
}
