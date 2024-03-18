import React, { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const ImgComparer = (props) => {
	const comparerRef = useRef();
	const [dividerPosition, setDividerPosition] = useState(0);

	useEffect(() => {
		setDividerPosition(comparerRef.current.offsetWidth / 2);
	}, []);

	useEffect(() => {
		let isSubscribed = true;

		const img = new Image();
		img.src = props.img2;
		img.onload = () => {
			if (isSubscribed) {
				setDividerPosition(comparerRef.current.offsetWidth / 2);
			}
		};

		return () => (isSubscribed = false);
	}, [props.img2]);

	const moveDivider = (e) => {
		const mousePositionOnImage =
			e.clientX - comparerRef.current.getBoundingClientRect().x;
		const imageWidth = comparerRef.current.getBoundingClientRect().width;

		if (mousePositionOnImage > 2 && mousePositionOnImage < imageWidth + 1)
			setDividerPosition(mousePositionOnImage);
	};

	return (
		<div className='compare'>
			<div
				className='compare-content'
				onMouseMove={(e) => moveDivider(e)}
				ref={comparerRef}
			>
				<img
					className='compare-content-active-img'
					src={props.img1}
					alt=''
					style={{ width: dividerPosition }}
				/>
				<img src={props.img2} alt='' className='img' />
				<div>
					<IconContext.Provider
						value={{
							className: 'compare-content-divider-arrow',
							size: '1.5rem',
						}}
					>
						<div
							className='compare-content-divider'
							style={{ left: dividerPosition - 26 }}
						>
							<FaCaretLeft>asd</FaCaretLeft>
							<div className='compare-content-divider-line'></div>
							<FaCaretRight />
						</div>
					</IconContext.Provider>
				</div>
			</div>
			<div className='compare-captions'>
				<span>{props.label1}</span>
				<span>{props.label2}</span>
			</div>
		</div>
	);
};

export default ImgComparer;
