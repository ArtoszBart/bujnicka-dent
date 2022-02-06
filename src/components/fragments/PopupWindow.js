import React, { useEffect, useState } from 'react';

const PopupWindow = props => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setVisible(false);
		}, props.delay);
	}, [props.delay]);

	return visible ? <h4>Wysłano</h4> : <></>;
};

export default PopupWindow;
