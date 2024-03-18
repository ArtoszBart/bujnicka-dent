import { useState } from 'react';

const useModal = () => {
	const modalClosingId = 'modal-closing';
	const [isMounted, setIsMounted] = useState(false);
	const [openedModal, setOpenedModal] = useState(null);

	const openModal = (title) => {
		setOpenedModal(title);
		setIsMounted(true);
	};

	const closeModal = (e) => {
		if (e.target.id === modalClosingId) {
			setIsMounted(false);
		}
	};

	const onAnimationEnd = () => {
		if (!isMounted) {
			setOpenedModal(null);
		}
	};

	return {
		openedModal,
		isMounted,
		openModal,
		closeModal,
		modalClosingId,
		onAnimationEnd,
	};
};

export default useModal;
