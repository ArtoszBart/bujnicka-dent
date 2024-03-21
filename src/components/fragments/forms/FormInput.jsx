import React from 'react';
import { IconContext } from 'react-icons';

function FormInput(props) {
	return (
		<div className='contact-form-input'>
			<label htmlFor={props.name}>{props.placeholder}</label>
			<div className='contact-form-input-box'>
				<IconContext.Provider
					value={{
						className: 'form-icon',
					}}
				>
					{props.Icon}
				</IconContext.Provider>
				{props.type === 'text-area' ? (
					<textarea
						name={props.name}
						id={props.name}
						placeholder={props.placeholder}
						cols='30'
						rows='5'
						tabIndex={props.tabIndex}
						value={props.value}
						onChange={props.onChange}
					></textarea>
				) : (
					<input
						className={props.error && 'error-input'}
						type={props.type}
						name={props.name}
						id={props.name}
						placeholder={props.placeholder}
						tabIndex={props.tabIndex}
						value={props.value}
						onChange={props.onChange}
					/>
				)}
			</div>
			<span className='error-text'>{props.error}</span>
		</div>
	);
}

export default FormInput;
