import React from "react";

const SinglePrice = ({ name, price, star }) => {

	return (
		<div className="prices-item">
			<p>{name}</p><p>{price}{star && <dt>*</dt>}</p>
		</div>
	);
};

export default SinglePrice;