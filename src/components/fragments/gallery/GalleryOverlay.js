import { certificates } from './../../../img/certificates/index';

function GalleryOverlay(props) {

	return (
		<div className={`gallery-overlay${props.hook.isBoxOpen ? ' opened' : ''}`}>
			<div className="top-pane" onClick={props.hook.closeGalleryOverlay}>
				<i className="fas fa-times" />
			</div>
			<div className="left-pane" onClick={props.hook.prevImage}>
				<i className="fas fa-chevron-left" />
			</div>
			<div className="right-pane" onClick={props.hook.nextImage}>
				<i className="fas fa-chevron-right" />
			</div>
			<div className="bottom-pane">
				<p>{props.hook.openedImg + 1} / {certificates.length}</p>
			</div>

			<div className="img-box">
				<img src={certificates[props.hook.openedImg]} alt="" />
			</div>
		</div>
	);
}

export default GalleryOverlay;
