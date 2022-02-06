import React from 'react'

function FormInput(props) {
	const errorSpanId = props.id + 'Error'

	return (
		<>
			<input
				type={props.type}
				className={props.className}
				id={props.id}
				placeholder={props.placeholder}
				tabIndex={props.tabIndex}
				ref={props.forwardedRef}
				onChange={props.onChange} />
			<span id={errorSpanId} className="error-text">{props.error}</span>
		</>
	)
}

export default FormInput