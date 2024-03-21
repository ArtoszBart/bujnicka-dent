import React from 'react';
import { Link } from 'react-router-dom';

function AgreementBox(props) {
	return (
		<div className='contact-form-input agreement-box'>
			<div className='agreement-box-input'>
				<label htmlFor={props.name}>
					Zapoznałam/em się z{' '}
					<Link to={'/polityka-prywatnosci'} className='text-link'>
						polityką prywatności
					</Link>
					.
				</label>
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
			</div>
			{props.error && <span className='error-text'>{props.error}</span>}
		</div>
	);
}

export default AgreementBox;
