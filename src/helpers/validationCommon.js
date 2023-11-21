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
			xss: 'Imię zawiera niedozwolone znaki',
		},
		email: {
			required: 'Email nie może być pusty',
			length: 'Email może mieć od 6 do 50 znaków',
			format: 'Email niepoprawny',
		},
		subject: {
			required: 'Temat nie może być pusty',
			length: 'Temat może mieć od 3 do 50 znaków',
			xss: 'Temat zawiera niedozwolone znaki',
		},
		message: {
			required: 'Treść nie może być pusta',
			length: 'Treść może mieć od 10 do 300 znaków',
			xss: 'Treść zawiera niedozwolone znaki',
		},
		firstName: {
			required: 'Imię nie może być puste',
			length: 'Imię może mieć od 2 do 20 znaków',
			xss: 'Imię zawiera niedozwolone znaki',
		},
		lastName: {
			required: 'Nazwisko nie może być puste',
			length: 'Nazwisko może mieć od 2 do 30 znaków',
			xss: 'Nazwisko zawiera niedozwolone znaki',
		},
		phoneNo: {
			required: 'Numer telefonu nie może być pusty',
			format: 'Numer telefonu niepoprawny',
		},
		description: {
			length: 'Opis może mieć maksymalnie 300 znaków',
			xss: 'Opis zawiera niedozwolone znaki',
		},
		doctor: {
			required: 'Lekarz musi być wybrany',
			format: 'Wystąpił nieoczekiwany błąd',
			range: 'Wystąpił nieoczekiwany błąd',
		},
		date: {
			required: 'Termin musi zostać wybrany',
			format: 'Wystąpił nieoczekiwany błąd',
			min: 'Ten termin nie jest poprawny',
			max: 'Ten termin nie jest poprawny',
			exceed: 'Ten termin nie jest poprawny',
			overlap: 'Ten termin nie jest poprawny',
			minutes: 'Wystąpił nieoczekiwany błąd',
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
