export function setStateSending(setSubmitInfo) {
	const state = {
		sending: true,
		message: 'Wysyłanie',
		success: null
	};
	setSubmitInfo(state)
}

export function setStateSuccess(setSubmitInfo) {
	const state = {
		sending: false,
		message: 'Wiadomość została wysłana',
		success: true
	};
	setSubmitInfo(state)
}

export function setStateError(setSubmitInfo, code) {
	const state = {
		sending: false,
		message: code && `Wystąpił problem, spróbuj ponownie później. Jeśli błąd się będzie powtarzał, daj nam znać podając kod błędu: ${code}`,
		success: false
	};
	setSubmitInfo(state)
}