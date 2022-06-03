import { useState } from "react";

const useModal = () => {
    const modalClosingId = "modal-closing";
    const [openedModal, setOpenedModal] = useState(null);

    const openModal = (title) => {
        setOpenedModal(title);
    }

    const closeModal = (e) => {
        if (e.target.id === modalClosingId) {
            setOpenedModal(null);
        }
    }

    return { openedModal, openModal, closeModal, modalClosingId };
};

export default useModal;