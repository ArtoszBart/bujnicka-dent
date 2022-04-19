export const sendingState = {
	sending: true,
	message: 'Wysyłanie',
	success: null
};

export const successStateSending = {
	sending: false,
	message: 'Wiadomość została wysłana',
	success: true
}

export function getSuccessState(doctor, date) {
	let message;
	const splitedDate = date.split(/-|\s/);
	if (doctor) {
		message = `Zapisano do: ${doctor.firstName} ${doctor.lastName} dnia ${splitedDate[2]}.${splitedDate[1]} o godzinie ${splitedDate[3]}`;
	} else {
		message = 'Wiadomość została wysłana';
	}
	const state = {
		sending: false,
		message: message,
		success: true
	};
	return state;
}

export function getErrorState(code) {
	const message = code ? `Wystąpił problem, spróbuj ponownie później. Jeśli błąd się będzie powtarzał, daj nam znać podając kod błędu: ${code}` : 'Formularz zawiera błędy';
	const state = {
		sending: false,
		message: message,
		success: false
	};
	return state;
}