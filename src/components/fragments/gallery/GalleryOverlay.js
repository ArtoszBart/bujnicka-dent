function GalleryOverlay(props) {
	return (
		<div className={`gallery-overlay${props.hook.isBoxOpen ? ' opened' : ''}`}
			id="overlay-closing"
			onClick={props.hook.closeGalleryOverlay}
		>
			<div className="top-pane" id="overlay-closing" onClick={props.hook.closeGalleryOverlay}>
				<i className="fas fa-times" id="overlay-closing" />
			</div>
			{props.multiple &&
				<>
					<div className="left-pane" onClick={props.hook.prevImage}>
						<i className="fas fa-chevron-left" />
					</div>
					<div className="right-pane" onClick={props.hook.nextImage}>
						<i className="fas fa-chevron-right" />
					</div>
					<div className="bottom-pane">
						<p>{props.hook.openedImg + 1} / {props.hook.images.length}</p>
					</div>
				</>
			}

			<div className="img-box"
				id="overlay-closing">
				<img src={props.hook.images[props.hook.openedImg]} alt="Certificate" />
			</div>
		</div>
	);
}

export default GalleryOverlay;
