import React, { useEffect, useRef, useState } from 'react'

const ImgComparer = (props) => {

    const comparerRef = useRef();
    const [dividerPosition, setDividerPosition] = useState(0);

    useEffect(() => {
        setDividerPosition(comparerRef.current.offsetWidth / 2);
    }, []);

    const moveDivider = (e) => {
        const mousePositionOnImage = e.clientX - comparerRef.current.getBoundingClientRect().x;
        const imageWidth = comparerRef.current.getBoundingClientRect().width;

        if (mousePositionOnImage > 2 && mousePositionOnImage < imageWidth - 2)
            setDividerPosition(mousePositionOnImage);
    };

    return (
        <div className="compare">
            <div className="compare-content" onMouseMove={e => moveDivider(e)} ref={comparerRef}>
                <img className='compare-content-active-img' src={props.img1} alt="" style={{ width: dividerPosition }} />
                <img src={props.img2} alt="" className='img' />
                <div className="compare-content-line" style={{ left: dividerPosition - 3 }}></div>
            </div>
            <div className="compare-captions">
                <span>{props.label1}</span>
                <span>{props.label2}</span>
            </div>
        </div>
    )
}

export default ImgComparer