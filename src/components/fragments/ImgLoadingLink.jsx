import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImgLoadingLink = (props) => {

	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = props.src;
		img.onload = () => {
			setImgLoaded(true);
		};
	}, [props.src]);

	return (
		<>
			{
				imgLoaded ?
					<Link to={props.to}>
						<img
							src={props.src}
							alt={props.alt || ""}
						/>
					</Link>
					:
					<div className="image-loading">
						<i className="fa fa-spinner fa-spin"></i>
						<span>Ładowanie zdjęcia</span>
					</div>
			}
		</>
	);
};
export default ImgLoadingLink;