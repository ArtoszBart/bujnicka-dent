import GalleryOverlay from '../fragments/gallery/GalleryOverlay';
import GalleryOverlayHook from '../fragments/gallery/customHooks/useGalleryOverlay';
import ParallaxBaner from '../fragments/ParallaxBanner';
import ImgLoading from '../fragments/ImgLoading';

function About() {
	const useGalleryOverlay = GalleryOverlayHook([
		[
			'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/persons/Tableau_Bohdan.jpg',
		],
		[
			'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/persons/Tableau_Maria.jpg',
		],
	]);

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='about' text='O nas' />
			<article className='page-content'>
				<section className='history'>
					<h2>Historia</h2>
					<div className='history-text'>
						<p>
							Historia lekarska w naszej rodzinie zaczęła się w
							1953 roku. Moja mama Maria Bałuta, rozpoczęła studia
							na Wydziale Stomatologicznym Akademii Medycznej w
							Gdańsku. Po studiach połączyła swoją lekarską pasję
							z Bohdanem Bujnickim, który w 1959 roku ukończył{' '}
							<span className='nowrap'>
								Wydział Weterynarii w Warszawie
							</span>
							.
						</p>
						<p>
							Pierwszy gabinet powstał w 1966 roku na Pomorzu
							Środkowym, a ja wyrastałam w jego sąsiedztwie w
							atmosferze niesienia pomocy pacjentom. Od wczesnego
							dzieciństwa wiedziałam, że moim powołaniem jest...
							również być lekarzem!
						</p>
						<p>Drugi gabinet powstał w 1993 roku w Warszawie.</p>
					</div>
					<div className='text-img horizontal'>
						<div className='photos'>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/persons/Maria_Baluta.jpg'
									}
									className='employee-picture'
									alt='Maria Bałuta'
								/>
								<div className='page-photo-text'>
									<span>Maria Bałuta</span>
									<span
										className='text-link'
										onClick={() =>
											useGalleryOverlay.openGalleryOverlay(
												1,
												0
											)
										}
									>
										(tablo)
									</span>
								</div>
							</div>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/persons/Bohdan_Bujnicki.jpg'
									}
									className='employee-picture'
									alt='Bohdan Bujnicki'
								/>
								<div className='page-photo-text'>
									<span>Bohdan Bujnicki</span>
									<span
										className='text-link'
										onClick={() =>
											useGalleryOverlay.openGalleryOverlay(
												0,
												0
											)
										}
									>
										(tablo)
									</span>
								</div>
							</div>
						</div>
					</div>
					{useGalleryOverlay.isOpened && (
						<GalleryOverlay hook={useGalleryOverlay} />
					)}
				</section>
				<section className='employee'>
					<div className='employee-title'>
						<h2>Magdalena Bujnicka</h2>
						<p className='subheadder'>Lekarz stomatolog</p>
					</div>
					<div className='page-photo employee-photo'>
						<ImgLoading
							src='https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/persons/Magdalena_Bujnicka.jpg'
							alt='Magdalena Bujnicka'
						/>
					</div>
					<div className='employee-about'>
						<p>
							Jestem absolwentką Pomorskiej Akademii Medycznej w
							Szczecinie i od pierwszych lat studiów mogłam liczyć
							na wsparcie oraz, poparte wieloletnim
							doświadczeniem, cenne rady rodziców lekarzy. Wpojono
							mi, że{' '}
							<b>dobro pacjenta jest najwyższą wartością</b>.
						</p>
						<p>
							Moim pacjentom zapewniam{' '}
							<b>całkowitą pomoc stomatologiczną</b>, począwszy od
							profilaktyki, aż do uzupełnienia braków zębowych.
							Zawsze projektuję kilka rozwiązań,{' '}
							<b>dopasowanych do możliwości finansowych</b>, a
							umiejętność słuchania pozwala mi zbliżyć plan
							leczenia do oczekiwań pacjenta. Często też udaje mi
							się{' '}
							<b>
								uratować zęby bardzo zniszczone i przeznaczone
								do ekstrakcji
							</b>
							. Stosowanie zasad minimalnie interweniujących w
							tkanki zęba, umożliwia uratowanie jak największej
							ilości własnych zębów pacjenta i pozwala na
							zastosowanie najkorzystniejszych rozwiązań
							protetycznych.
						</p>
						<p>
							Dwuletni staż podyplomowy w prywatnym gabinecie w
							Wiedniu w Austrii, umożliwił mi szybkie zapoznanie
							się i wdrożenie nowoczesnych procedur. Zgromadzone{' '}
							<b>doświadczenie dwóch pokoleń</b> w połączeniu z{' '}
							<b>najnowocześniejszymi technologiami</b> i wiedzą,
							gwarantują najlepszy możliwy standard usług
							stomatologicznych!
						</p>
					</div>
				</section>
			</article>
		</main>
	);
}

export default About;
