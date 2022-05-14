import { useState, useCallback, useEffect } from "react";

const useGalleryOverlay = (certificates) => {
	console.log(certificates);
	const [isBoxOpen, setIsBoxOpen] = useState(false);
	const [openedImg, setOpenedImg] = useState(null);

	const openGalleryOverlay = (id) => {
		setOpenedImg(id);
		setIsBoxOpen(true);
	};

	const closeGalleryOverlay = (e) => {
		if (e.target.id === "overlay-closing") {
			setIsBoxOpen(false);
		}
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

	const keyListener = useCallback((event) => {
		if (event.key === "ArrowRight") {
			nextImage();
		} else if (event.key === "ArrowLeft") {
			prevImage();
		} else if (event.key === "Escape") {
			setIsBoxOpen(false);
		}
	}, [nextImage, prevImage]);

	useEffect(() => {
		document.addEventListener("keydown", keyListener);

		return () => {
			document.removeEventListener("keydown", keyListener);
		};
	}, [keyListener]);

	return { isBoxOpen, openedImg, openGalleryOverlay, closeGalleryOverlay, nextImage, prevImage };
};

export default useGalleryOverlay;