import certificates from '../../img/certificates/index';
import GalleryOverlay from '../fragments/gallery/GalleryOverlay'
import GalleryOverlayHook from '../fragments/gallery/customHooks/useGalleryOverlay';
import ParallaxBaner from '../fragments/ParallaxBanner'
import ProgressiveImg from '../fragments/ProgressiveImg';

function Certificates() {
	const useGalleryOverlay = GalleryOverlayHook([certificates.map(cert => cert.full)]);

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="certificates" text="Certyfikaty" />

			<article className="page-content gallery">
				{certificates.map((value, index) => {
					return <ProgressiveImg
						key={index}
						src={value.full}
						placeholderSrc={value.placeholder}
						onClick={() => useGalleryOverlay.openGalleryOverlay(0, index)}
						alt="Certificate"
					/>
				})}
			</article>
			{
				useGalleryOverlay.isMounted &&
				<GalleryOverlay hook={useGalleryOverlay} multipleImages />
			}
		</main>
	);
}

export default Certificates;
