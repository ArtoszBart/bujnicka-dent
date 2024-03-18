import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const ImportantInfo = ({ children }) => {
	return (
		<div className='important-info'>
			<div className='important-info-title'>
				<FaInfoCircle />
				<h5>Ważne</h5>
			</div>
			<p>{children}</p>
		</div>
	);
};

export default ImportantInfo;
