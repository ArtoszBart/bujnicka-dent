import { useState, useCallback, useEffect } from "react";

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
		if (!isOpened)
			setIsOpened(true);
	};

	const onAnimationEnd = () => {
		if (!isMounted) {
			setIsOpened(false);
		}
	};

	const closeGalleryOverlay = (e) => {
		if (e.target.id === "overlay-closing") {
			setIsMounted(false);
		}
	};

	const nextImage = useCallback(() => {
		let nextId;
		if (openedImg < activeImageSet.length - 1) {
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
			prevId = activeImageSet.length - 1;
		}

		setOpenedImg(prevId);

	}, [openedImg]);

	const keyListener = useCallback((event) => {
		if (event.key === "ArrowRight") {
			nextImage();
		} else if (event.key === "ArrowLeft") {
			prevImage();
		} else if (event.key === "Escape") {
			setIsMounted(false);
		}
	}, [nextImage, prevImage]);

	useEffect(() => {
		document.addEventListener("keydown", keyListener);

		return () => {
			document.removeEventListener("keydown", keyListener);
		};
	}, [keyListener]);

	return {
		isMounted, openedImg, openGalleryOverlay, closeGalleryOverlay, nextImage, prevImage,
		isOpened, onAnimationEnd, activeImageSet
	};
};

export default useGalleryOverlay;