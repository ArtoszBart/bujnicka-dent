import { useState, useCallback, useEffect } from "react";
import { certificates } from './../../../img/certificates/index';
import useGalleryOverlay from './customHooks/useGalleryOverlay';

function GalleryOverlay(props) {

	const { openedImg, closeBox, nextImage, prevImage } = useGalleryOverlay(certificates);
	return (
		<div className={`gallery-overlay ${props.opened ? 'opened' : ''}`}>
			<div className="top-pane" onClick={closeBox}>
				<i className="fas fa-times" />
			</div>
			<div className="left-pane" onClick={prevImage}>
				<i className="fas fa-chevron-left" />
			</div>
			<div className="right-pane" onClick={nextImage}>
				<i className="fas fa-chevron-right" />
			</div>
			<div className="bottom-pane">
				<p>{openedImg + 1} / {certificates.length}</p>
			</div>

			<div className="img-box">
				<img src={certificates[openedImg]} alt="" />
			</div>
		</div>
	);
}

export default GalleryOverlay;
