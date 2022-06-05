import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
	const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
	const loadingClass = placeholderSrc && imgSrc === placeholderSrc ? "img-loading" : "img-loaded";

	useEffect(() => {
		let isSubscribed = true;

		const img = new Image();
		img.src = src;
		img.onload = () => {
			if (isSubscribed) {
				setImgSrc(src);
			}
		};

		return () => (isSubscribed = false);
	}, [src]);

	return (
		<img
			{...{ src: imgSrc, ...props }}
			alt={props.alt || ""}
			className={loadingClass}
		/>
	);
};
export default ProgressiveImg;