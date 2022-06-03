import React from 'react';

const Modal = props => {

    return (
        <div className={`modal${props.hook.openedModal === props.title ? ' opened' : ''}`}
            id={props.hook.modalClosingId}
            onClick={props.hook.closeModal}>
            <div className="modal-body">
                <h3>{props.title}</h3>
                <div className="modal-body-content">
                    {props.children}
                </div>
                <div className="modal-body-close" id={props.hook.modalClosingId} onClick={props.hook.closeModal}>
                    <i className="fas fa-times" id={props.hook.modalClosingId} onClick={props.hook.closeModal} />
                </div>
            </div>
        </div>
    );
};

export default Modal;