import { useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

const ImgLoading = (props) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		let isSubscribed = true;
		setImgLoaded(false);

		const img = new Image();
		img.src = props.src;
		img.onload = () => {
			if (isSubscribed) {
				setImgLoaded(true);
			}
		};

		return () => (isSubscribed = false);
	}, [props.src]);

	return (
		<>
			{imgLoaded ? (
				<img {...props} alt={props.alt || ''} />
			) : (
				<div className='loading'>
					<CircleLoader color='#1b3c7b' />
				</div>
			)}
		</>
	);
};
export default ImgLoading;
