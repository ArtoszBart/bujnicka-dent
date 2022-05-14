import React from 'react'

const Modal = props => {
    const modalClosingId = "modal-closing";
    const closeModal = (e) => {
        if (e.target.id === modalClosingId) {
            props.setIsModalOpen(false);
        }
    }

    return (
        <div className={`modal${props.isModalOpen ? ' opened' : ''}`}
            id={modalClosingId}
            onClick={closeModal}>
            <div className="modal-body">
                <h3>{props.title}</h3>
                <div className="modal-body-content">
                    <p>{props.children}</p>
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="modal-body-close" id={modalClosingId} onClick={closeModal}>
                    <i className="fas fa-times" id={modalClosingId} onClick={closeModal} />
                </div>
            </div>
        </div>
    )
}

export default Modal