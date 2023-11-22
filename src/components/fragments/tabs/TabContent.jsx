import React from 'react';
import SinglePrice from '../prices/SinglePrice';
import MultiplePrices from '../prices/MultiplePrice';

const TabContent = ({ prices }) => {
	return (
		<section className='prices'>
			<h2>{prices.title}</h2>
			{prices.prices.map((price, key) => {
				if (price.price !== null) {
					return (
						<SinglePrice
							key={key}
							name={price.title}
							price={price.price}
						/>
					);
				} else if (price.price == null && price.subPrices?.length > 0) {
					return (
						<MultiplePrices
							key={key}
							title={price.title}
							prices={price.subPrices}
						/>
					);
				}
			})}
		</section>
	);
};

export default TabContent;
