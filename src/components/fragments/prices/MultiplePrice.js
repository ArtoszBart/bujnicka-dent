import React from "react";

const MultiplePrices = ({ title, names, prices }) => {

	return (
		<div className="prices-item prices-multiple">
			<p>{title}:</p>
			<div className="prices-multiple-items">
				{names.map((value, index) => {
					const price = prices[index];
					return <><p key="value">{value}</p><p>{price}</p></>
				})}
			</div>
		</div>
	);
};

export default MultiplePrices;