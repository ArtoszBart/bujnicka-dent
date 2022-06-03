import React, { useState, useRef } from 'react';

const Collapsible = (props) => {

    const [isOpened, setIsOpened] = useState(false);

    const bodyRef = useRef();

    return (
        <section className="collapsible">
            <div className="collapsible-header" onClick={() => setIsOpened(!isOpened)}>
                <i className={`fas fa-chevron-down${isOpened === true ? ' opened' : ''}`} />
                <h3>
                    {props.question}
                </h3>
            </div>

            <div className='collapsible-body' ref={bodyRef} style={
                isOpened ? {
                    height: bodyRef.current.scrollHeight + 'px'
                } : {
                    height: '0px'
                }
            }>
                <div className="collapsible-body-content">
                    {props.children}
                </div>
            </div>

        </section>
    );
};

export default Collapsible;