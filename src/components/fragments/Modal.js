import React from 'react'

const Modal = props => {
    const modalClosingId = "modal-background";
    const click = (e) => {
        if (e.target.id === modalClosingId) {
            props.setIsModalOpen(false);
        }
    }

    return (
        <div className={`modal${props.isModalOpen ? ' opened' : ''}`}
            id={modalClosingId}
            onClick={click}>
            <div className="modal-content">
                <h3>{props.title}</h3>
                <p>{props.children}</p>
                <img src={props.image} />
                <button id={modalClosingId}>close</button>
            </div>
        </div>
    )
}

export default Modal