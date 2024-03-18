import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Modal = (props) => {
	return (
		<div
			className={`modal${props.hook.isMounted ? ' opened' : ' closing'}`}
			id={props.hook.modalClosingId}
			onAnimationEnd={props.hook.onAnimationEnd}
			onClick={props.hook.closeModal}
		>
			<div className='modal-body'>
				<h3>{props.title}</h3>
				<div className='modal-body-content'>{props.children}</div>
				<div
					className='modal-body-close'
					id={props.hook.modalClosingId}
					onClick={props.hook.closeModal}
				>
					<IconContext.Provider
						value={{
							className: 'modal-body-close-icon',
						}}
					>
						<FaTimes />
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default Modal;
