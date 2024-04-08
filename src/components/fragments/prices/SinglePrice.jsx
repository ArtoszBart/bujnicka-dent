import React from 'react';

const SinglePrice = ({ name, price }) => {
	const priceValue = price === '0' ? 'BEZPŁATNIE' : price;

	return (
		<div className='prices-item'>
			<p>{name}</p>
			<p>
				{priceValue} {/\d/.test(priceValue) ? 'zł' : ''}
			</p>
		</div>
	);
};

export default SinglePrice;
