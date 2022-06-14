import ImgLoading from '../ImgLoading';

function GalleryOverlay({ hook, multipleImages }) {
	return (
		<div
			className={`gallery-overlay${hook.isMounted ? ' opened' : ' closing'}`}
			onAnimationEnd={hook.onAnimationEnd}
			id='overlay-closing'
			onClick={hook.closeGalleryOverlay}>
			<div className='top-pane' id='overlay-closing' onClick={hook.closeGalleryOverlay}>
				<i className='fas fa-times' id='overlay-closing' />
			</div>
			{multipleImages && (
				<>
					<div className='left-pane' onClick={hook.prevImage}>
						<i className='fas fa-chevron-left' />
					</div>
					<div className='right-pane' onClick={hook.nextImage}>
						<i className='fas fa-chevron-right' />
					</div>
					<div className='bottom-pane'>
						<p>
							{hook.openedImg + 1} / {hook.activeImageSet.length}
						</p>
					</div>
				</>
			)}

			<div className='img-box' id='overlay-closing'>
				<ImgLoading src={hook.activeImageSet[hook.openedImg]} alt='Certificate' />
			</div>
		</div>
	);
}

export default GalleryOverlay;
