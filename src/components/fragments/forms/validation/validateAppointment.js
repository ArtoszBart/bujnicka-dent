import { checkRequired, checkTextLengthRange, checkRegex, getErrorMessages } from './../../../../helpers/validationCommon';

export default function validateContactForm(values, doctors) {
    let errors = {}

    //firstName: '',
    //lastName: '',
    //phoneNo: '',
    //description: '',
    //doctorId: '',
    //date: '',``

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

    if (!checkTextLengthRange(values.description, 0, 50)) {
        errors.description = 'length';
    } else if (!checkRegex(values.description, /^[0-9\p{L} ,.?\-\n]+$/)) {
        errors.description = 'format';
    }

    if (!checkRequired(values.doctorId)) {
        errors.doctorId = 'required';
    } else if (checkExists(values.doctorId, doctors)) {
        errors.doctorId = 'exists';
    }

    if (!checkRequired(values.date)) {
        errors.date = 'required';
    }

    return getErrorMessages(errors);
};