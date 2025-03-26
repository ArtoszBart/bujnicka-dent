import React from 'react';
import ImgLoading from './ImgLoading';

const EmployeeInfo = ({ name, title, photoUrl, children }) => {
	return (
		<section className='employee'>
			<div className='employee-title'>
				<h2>{name}</h2>
				<p className='subheadder'>{title}</p>
			</div>
			<div className='page-photo employee-photo'>
				<ImgLoading src={photoUrl} alt={`${name}, ${title}`} />
			</div>
			<div className='employee-about'>{children}</div>
		</section>
	);
};

export default EmployeeInfo;
