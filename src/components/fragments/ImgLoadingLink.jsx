import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';

const ImgLoadingLink = (props) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		let isSubscribed = true;

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
				<Link to={props.to}>
					<img src={props.src} alt={props.alt || ''} />
				</Link>
			) : (
				<div className='loading'>
					<CircleLoader color='#3fbbd1' />
				</div>
			)}
		</>
	);
};
export default ImgLoadingLink;
