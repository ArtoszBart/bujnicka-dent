import ImgLoading from '../ImgLoading';
import { useState, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons';
import {
	FaTimes,
	FaChevronLeft,
	FaChevronRight,
	FaCaretLeft,
	FaCaretRight,
} from 'react-icons/fa';

function GalleryOverlay({ hook, multipleImages }) {
	const cenralPaneRef = useRef();

	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	const [isUserTouchMoving, setIsUserTouchMoving] = useState(false);
	const [startDragPosition, setStartDragPosition] = useState(0);
	const [userMove, setUserMove] = useState(0);

	let centralPaneWidthAndPos = {
		width: `${hook.activeImageSet.length * 100}vw`,
		transform: `translateX(calc(-${
			hook.openedImg * 100 + 50
		}vw + ${userMove}px))`,
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('touchmove', preventMobileVerticalScroll, {
			passive: false,
		});
		document.body.style.overflow = 'hidden';

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener(
				'touchmove',
				preventMobileVerticalScroll,
				{ passive: false }
			);
			document.body.style.overflow = 'initial';
		};
	});

	const preventMobileVerticalScroll = (e) => {
		if (isUserTouchMoving) {
			e.preventDefault();
			e.returnValue = false;
			return false;
		}
	};

	const handleResize = () => {
		setWindowHeight(window.innerHeight);
	};

	const onTouchStart = (e) => {
		setIsUserTouchMoving(true);
		setStartDragPosition(e.touches[0].clientX);
	};

	const onTouchMove = (e) => {
		setUserMove(e.touches[0].clientX - startDragPosition);
	};

	const onTouchEnd = () => {
		setIsUserTouchMoving(false);
		if (userMove > 50) {
			hook.prevImage();
			setUserMove(0);
		} else if (userMove < -50) {
			hook.nextImage();
			setUserMove(0);
		} else {
			setUserMove(0);
		}
	};

	return (
		<div
			className={`gallery-overlay${
				hook.isOpened ? ' opened' : ' closing'
			}`}
			style={{ height: `${windowHeight}px` }}
			onAnimationEnd={hook.onAnimationEnd}
			id='overlay-closing'
			onClick={hook.closeGalleryOverlay}
		>
			<IconContext.Provider value={{ color: 'white' }}>
				<div
					className='top-pane'
					id='overlay-closing'
					onClick={hook.closeGalleryOverlay}
				>
					<FaTimes id='overlay-closing' />
				</div>
				{multipleImages && (
					<>
						<div className='left-pane' onClick={hook.prevImage}>
							<FaChevronLeft />
						</div>
						<div className='right-pane' onClick={hook.nextImage}>
							<FaChevronRight />
						</div>
						<div className='bottom-pane'>
							<div
								className='bottom-pane-button'
								onClick={hook.prevImage}
							>
								<FaCaretLeft />
							</div>
							<p>
								{hook.openedImg + 1} /{' '}
								{hook.activeImageSet.length}
							</p>
							<div
								className='bottom-pane-button'
								onClick={hook.nextImage}
							>
								<FaCaretRight />
							</div>
						</div>
					</>
				)}
			</IconContext.Provider>
			<div
				className={`central-pane${
					isUserTouchMoving ? ' user-moving' : ''
				}`}
				id='overlay-closing'
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
				style={centralPaneWidthAndPos}
				ref={cenralPaneRef}
			>
				{hook.activeImageSet.map((imgSrc, index) => {
					return (
						<div
							className='img-box'
							key={index}
							id='overlay-closing'
						>
							<ImgLoading
								src={imgSrc}
								alt='Zdjęcie galerii'
								loading='lazy'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default GalleryOverlay;
