import { useState, useEffect } from "react";

const ImgLoading = (props) => {

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
					<img
						{...props}
						alt={props.alt || ""}
					/>
					:
					<div className="image-loading">
						<i className="fa fa-spinner fa-spin"></i>
						<span>Ładowanie zdjęcia</span>
					</div>
			}
		</>
	);
};
export default ImgLoading;