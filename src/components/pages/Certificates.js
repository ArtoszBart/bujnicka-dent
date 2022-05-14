import { certificates } from '../../img/certificates/index';
import GalleryOverlay from '../fragments/gallery/GalleryOverlay'
import GalleryOverlayHook from './../fragments/gallery/customHooks/useGalleryOverlay';
import ParallaxBaner from '../fragments/ParallaxBanner'

function Certificates() {

	const useGalleryOverlay = GalleryOverlayHook(certificates);

	return (
		<main className="page-wrapper wait-wrapper" role="main">
			<ParallaxBaner id="certificates" text="Certyfikaty" />
			<article className="page-content gallery">
				{certificates.map((value, index) => {
					return <img
						src={value}
						key={index}
						onClick={() => useGalleryOverlay.openGalleryOverlay(index)}
						alt="Certificate" />
				})}
			</article>
			<GalleryOverlay hook={useGalleryOverlay} multiple />
		</main>
	);
}

export default Certificates;
