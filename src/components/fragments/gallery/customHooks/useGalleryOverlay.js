import { useState, useEffect } from "react";

const useGalleryOverlay = (images) => {

	const [isOpened, setIsOpened] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [activeImageSet, setActiveImageSet] = useState(null);
	const [openedImg, setOpenedImg] = useState(null);

	const openGalleryOverlay = (set, id) => {
		if (!images) {
			return;
		}
		setActiveImageSet(images[set]);
		setOpenedImg(id);
		setIsMounted(true);
		setIsOpened(true);
	};

	const onAnimationEnd = () => {
		if (!isOpened) {
			setIsMounted(false);
		}
	};

	const closeGalleryOverlay = (e) => {
		if (e.target.id === "overlay-closing") {
			setIsOpened(false);
		}
	};

	const nextImage = () => {
		let nextId;
		if (openedImg < activeImageSet.length - 1) {
			nextId = openedImg + 1;
		} else {
			nextId = 0;
		}

		setOpenedImg(nextId);
	};

	const prevImage = () => {
		let prevId;
		if (openedImg > 0) {
			prevId = openedImg - 1;
		} else {
			prevId = activeImageSet.length - 1;
		}

		setOpenedImg(prevId);
	};

	const keyListener = (event) => {
		if (event.key === "ArrowRight") {
			nextImage();
		} else if (event.key === "ArrowLeft") {
			prevImage();
		} else if (event.key === "Escape") {
			setIsMounted(false);
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", keyListener);

		return () => {
			document.removeEventListener("keydown", keyListener);
		};
	});

	return {
		isMounted, openedImg, openGalleryOverlay, closeGalleryOverlay, nextImage, prevImage,
		isOpened, onAnimationEnd, activeImageSet
	};
};

export default useGalleryOverlay;