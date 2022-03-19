import { useState, useCallback } from "react";

const useGalleryOverlay = (certificates) => {

	const [isBoxOpen, setIsBoxOpen] = useState(false);
	const [openedImg, setOpenedImg] = useState(null);

	const openBox = (id) => {
		setOpenedImg(id);
		setIsBoxOpen(true);
	};

	const closeBox = () => {
		console.log("close");
		setIsBoxOpen(false);
	};

	const nextImage = useCallback(() => {
		let nextId;
		if (openedImg < certificates.length - 1) {
			nextId = openedImg + 1;
		} else {
			nextId = 0;
		}

		setOpenedImg(nextId);

	}, [openedImg]);

	const prevImage = useCallback(() => {
		let prevId;
		if (openedImg > 0) {
			prevId = openedImg - 1;
		} else {
			prevId = certificates.length - 1;
		}

		setOpenedImg(prevId);

	}, [openedImg]);

	const escFunction = useCallback((event) => {
		if (event.key === "ArrowRight") {
			nextImage();
		} else if (event.key === "ArrowLeft") {
			prevImage();
		} else if (event.key === "Escape") {
			closeBox();
		}
	}, [nextImage, prevImage]);

	return { isBoxOpen, openedImg, openBox, closeBox, nextImage, prevImage, escFunction };
};

export default useGalleryOverlay;