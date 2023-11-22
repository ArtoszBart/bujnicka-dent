import React from 'react';

const SinglePrice = ({ name, price }) => {
	return (
		<div className='prices-item'>
			<p>{name}</p>
			<p>
				{price} {/\d/.test(price) ? 'zł' : ''}
			</p>
		</div>
	);
};

export default SinglePrice;
