import React from 'react';

const MultiplePrices = ({ title, prices }) => {
	return (
		<div className='prices-item prices-multiple'>
			<p>{title}:</p>
			<div className='prices-multiple-items'>
				{prices.map((price, index) => {
					return (
						<React.Fragment key={index}>
							<p>{price.title}</p>
							<p>
								{price.price}{' '}
								{/\d/.test(price.price) ? 'zł' : ''}
							</p>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default MultiplePrices;
