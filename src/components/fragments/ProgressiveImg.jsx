import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
	const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

	useEffect(() => {
		setImgSrc(src);
	}, [src]);

	return (
		<img
			{...{ src: imgSrc, ...props }}
			alt={props.alt || ""}
		/>
	);
};
export default ProgressiveImg;