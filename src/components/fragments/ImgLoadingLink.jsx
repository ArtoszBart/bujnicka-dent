import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
			{imgLoaded ?
				<Link to={props.to}>
					<img
						src={props.src}
						alt={props.alt || ""}
					/>
				</Link>
				:
				<div className="loading">
					<i className="fa fa-spinner fa-spin"></i>
					<span>Ładowanie zdjęcia</span>
				</div>
			}
		</>
	);
};
export default ImgLoadingLink;