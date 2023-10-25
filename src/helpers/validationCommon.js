export function resetErrors(inputs, errorTexts, errorInfo) {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove('error-input');
	}
	for (let i = 0; i < errorTexts.length; i++) {
		errorTexts[i].innerText = '';
	}
	errorInfo.innerText = '';
}

export function checkRequired(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	if (value === '') {
		return false;
	}
	return true;
}

export function checkTextLengthRange(value, min, max) {
	const length = value.toString().trim().length;
	if (length > max) {
		return false;
	}
	if (length < min) {
		return false;
	}
	return true;
}

export function checkRegex(value, pattern) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	return pattern.test(value);
}

export function decodeErrorMessages(errors) {
	const dictionary = {
		name: {
			required: 'Imię nie może być puste',
			length: 'Imię może mieć od 2 do 30 znaków',
		},
		email: {
			required: 'Email nie może być pusty',
			format: 'Email niepoprawny',
		},
		subject: {
			required: 'Temat nie może być pusty',
			length: 'Temat może mieć od 3 do 50 znaków',
		},
		message: {
			required: 'Treść nie może być pusta',
			length: 'Treść może mieć od 10 do 300 znaków',
		},
		firstName: {
			required: 'Imię nie może być puste',
			length: 'Imię może mieć od 2 do 20 znaków',
		},
		lastName: {
			required: 'Nazwisko nie może być puste',
			length: 'Nazwisko może mieć od 2 do 30 znaków',
		},
		phoneNo: {
			required: 'Numer telefonu nie może być pusty',
			format: 'Numer telefonu niepoprawny',
		},
		description: {
			length: 'Opis może mieć maksymalnie 300 znaków',
			format: 'Opis zawiera niedozwolone znaki',
		},
		doctorId: {
			required: 'Lekarz musi być wybrany',
		},
		date: {
			required: 'Data musi być wybrana',
			overlap: 'Godzina w tym dniu jest już zajęta',
			dateRange: 'Ten termin nie jest poprawny',
			overlap: 'Ten termin jest zajęty',
		},
		agreement: {
			required: 'Wyrażenie zgody jest obowiązkowe',
		},
	};

	let errorMessages = {};
	for (const [key, value] of Object.entries(errors)) {
		errorMessages = {
			...errorMessages,
			[key]: dictionary[key][value],
		};
	}
	return errorMessages;
}
