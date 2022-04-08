import React from 'react'

function FormInput(props) {
	return (
		<div className={props.name !== 'agreement' ? 'contact-form-input' : 'contact-form-agreement-box'}>
			<label htmlFor={props.name}>{props.placeholder}</label>
			<input
				className={props.error && 'error-input'}
				type={props.type}
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				tabIndex={props.tabIndex}
				value={props.value}
				onChange={props.onChange} />
			{props.error && <span className="error-text">{props.error}</span>}
		</div>
	)
}

export default FormInput