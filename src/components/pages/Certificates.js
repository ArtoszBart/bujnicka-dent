import '../../styles/main.scss';
import { useState, useCallback, useEffect } from 'react';
import { certificates } from '../../img/certificates/index';
import GalleryOverlay from '../fragments/gallery/GalleryOverlay'
import useGalleryOverlay from './../fragments/gallery/customHooks/useGalleryOverlay';

function Certificates() {

	const { isBoxOpen, openedImg, openBox, closeBox, nextImage, prevImage, escFunction } = useGalleryOverlay(certificates);

	useEffect(() => {
		document.addEventListener("keydown", escFunction);

		return () => {
			document.removeEventListener("keydown", escFunction);
		};
	}, [escFunction]);

	return (
		<main className="page-wrapper wait-wrapper" role="main">
			<div className="banner" id="certificates">
				<div className="banner-title">
					<h1><i>Certyfikaty</i></h1>
				</div>
			</div>

			<article className="page-content gallery">
				{certificates.map((value, index) => {
					return <img src={value} key={index} onClick={() => openBox(index)} alt="Certificate" />
				})}
			</article>
			{/* <GalleryOverlay opened={isBoxOpen} /> */}
			<div className={`gallery-overlay ${isBoxOpen ? 'opened' : ''}`}>
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
		</main>
	);
}

export default Certificates;
