import GalleryOverlay from '../fragments/gallery/GalleryOverlay';
import GalleryOverlayHook from '../fragments/gallery/customHooks/useGalleryOverlay';
import ParallaxBaner from '../fragments/ParallaxBanner';
import ProgressiveImg from '../fragments/ProgressiveImg';
import placeholders from '../../img/certificates/index';

function Certificates() {
	const useGalleryOverlay = GalleryOverlayHook([
		placeholders.map((cert) => {
			return `https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/certificates/full/${cert.id}.jpg`;
		}),
	]);

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='certificates' text='Certyfikaty' />

			<article className='page-content gallery'>
				{placeholders.map((value, index) => {
					return (
						<ProgressiveImg
							key={index}
							src={`https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/certificates/preview/${value.id}.jpg`}
							placeholderSrc={value.src}
							onClick={() =>
								useGalleryOverlay.openGalleryOverlay(0, index)
							}
							alt='Certyfikat'
						/>
					);
				})}
			</article>
			{useGalleryOverlay.isMounted && (
				<GalleryOverlay hook={useGalleryOverlay} multipleImages />
			)}
		</main>
	);
}

export default Certificates;
