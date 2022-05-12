import React from 'react'

const Modal = props => {
    const modalClosingId = "modal-closing";
    const click = (e) => {
        if (e.target.id === modalClosingId) {
            props.setIsModalOpen(false);
        }
    }

    return (
        <div className={`modal${props.isModalOpen ? ' opened' : ''}`}
            id={modalClosingId}
            onClick={click}>
            <div className="modal-body">
                <h3>{props.title}</h3>
                <div className="modal-body-content">
                    <p>{props.children}</p>
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="modal-body-close" id={modalClosingId} onClick={click}>
                    <i className="fas fa-times" id={modalClosingId} onClick={click} />
                </div>
            </div>
        </div>
    )
}

export default Modal