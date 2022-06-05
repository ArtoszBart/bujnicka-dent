import { useState, useEffect } from "react";

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
			{
				imgLoaded ?
					<img
						{...props}
						alt={props.alt || ""}
					/>
					:
					<div className="loading">
						<i className="fa fa-spinner fa-spin"></i>
						<span>Ładowanie zdjęcia</span>
					</div>
			}
		</>
	);
};
export default ImgLoading;