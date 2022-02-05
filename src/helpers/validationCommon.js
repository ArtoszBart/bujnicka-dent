export function resetErrors(inputs, errorTexts, errorInfo) {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove("error-input");
	}
	for (let i = 0; i < errorTexts.length; i++) {
		errorTexts[i].innerText = "";
	}
	errorInfo.innerText = "";
}

export function checkRequired(value) {
	if (!value) {
		return false;
	}
	value = value.toString().trim();
	if (value === "") {
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

export function checkEmail(value) {
	if (!value) {
		return false;
	}
	const pattern = /^[a-zA-Z0-9._-]{1,30}@[0-1a-zA-Z]{2,20}\.[a-zA-Z]{2,3}$/;
	value = value.toString().trim();
	return pattern.test(value);
}