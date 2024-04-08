import React from 'react';

const MultiplePrices = ({ title, prices }) => {
	return (
		<div className='prices-item prices-multiple'>
			<p>{title}:</p>
			<div className='prices-multiple-items'>
				{prices.map((price, index) => {
					const priceValue =
						price.price === '0' ? 'BEZPŁATNIE' : price.price;
					return (
						<React.Fragment key={index}>
							<p>{price.title}</p>
							<p>
								{priceValue} {/\d/.test(priceValue) ? 'zł' : ''}
							</p>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default MultiplePrices;
