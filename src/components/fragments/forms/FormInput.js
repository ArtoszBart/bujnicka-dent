import React from 'react'

function FormInput(props) {
	const divClassName = `contact-form-${props.name}`;

	return (
		<div className={divClassName}>
			<label htmlFor={props.name}>{props.placeholder}</label>
			<input
				type={props.type}
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				className={props.className}
				tabIndex={props.tabIndex}
				value={props.value}
				onChange={props.onChange} />
			{props.error && <span className="error-text">{props.error}</span>}
		</div>
	)
}

export default FormInput