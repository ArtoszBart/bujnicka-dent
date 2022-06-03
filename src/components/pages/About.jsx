import GalleryOverlay from '../fragments/gallery/GalleryOverlay'
import GalleryOverlayHook from '../fragments/gallery/customHooks/useGalleryOverlay';
import ParallaxBaner from '../fragments/ParallaxBanner';
import Images from '../../img/persons';

function About() {

	const useGalleryOverlay = GalleryOverlayHook([[Images.TablBohdan], [Images.TablMaria]]);

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="about" text="O nas" />
			<article className="page-content">
				<section className="history">
					<h2>Historia</h2>
					<p>Historia lekarska w naszej rodzinie zaczęła się w 1953 roku.
						Moja mama Maria Bałuta, rozpoczęła studia na <span className="nowrap">Wydziale Stomatologicznym Akademii Medycznej w Gdańsku</span>.
						Po studiach połączyła swoją lekarską pasję z Bohdanem Bujnickim,
						który w 1959 roku ukończył <span className="nowrap">Wydział Weterynarii w Warszawie</span>.
					</p><p>
						Pierwszy gabinet powstał w 1966 roku na Pomorzu Środkowym,
						a ja wyrastałam w jego sąsiedztwie w atmosferze niesienia pomocy pacjentom.
						Od wczesnego dzieciństwa wiedziałam, że moim powołaniem jest... również być lekarzem!
					</p>
					<p>
						Drugi gabinet powstał w 1993 roku w Warszawie.
					</p>
					<div className="history-pictures">
						<div className="history-pictures-single">
							<img src={Images.PhotoMaria} className="employee-picture" alt="Maria Bałuta" />
							<span>Maria Bałuta</span>
							<span className="text-link"
								onClick={() => useGalleryOverlay.openGalleryOverlay(1, 0)}>
								(tablo)
							</span>
						</div>
						<div className="history-pictures-single">
							<img src={Images.PhotoBohdan} className="employee-picture" alt="Bohdan Bujnicki" />
							<span>Bohdan Bujnicki</span>
							<span
								className="text-link"
								onClick={() => useGalleryOverlay.openGalleryOverlay(0, 0)}>
								(tablo)
							</span>
						</div>
					</div>
					{
						useGalleryOverlay.isOpened &&
						<GalleryOverlay hook={useGalleryOverlay} />
					}
				</section>
				<section className="employee">
					<div className="img-box">
						<img src={Images.PhotoBujnicka} className="employee-picture" alt="Magdalena Bujnicka" />
					</div>
					<div className="employee-about">
						<h2>Magdalena Bujnicka</h2>
						<p className="subheadder">Lekarz stomatolog</p>
						<p>
							Jestem absolwentką <span className="nowrap">Pomorskiej Akademii Medycznej w Szczecinie</span> i od pierwszych lat studiów
							mogłam liczyć na wsparcie oraz, poparte wieloletnim doświadczeniem, cenne rady rodziców lekarzy.
							Wpojono mi, że <b>dobro pacjenta jest najwyższą wartością</b>.
						</p>
						<p>
							Moim pacjentom zapewniam <b>całkowitą pomoc stomatologiczną</b>,
							począwszy od profilaktyki, aż do uzupełnienia braków zębowych.
							Zawsze projektuję kilka rozwiązań, <b>dopasowanych do możliwości finansowych</b>,
							a umiejętność słuchania pozwala mi zbliżyć plan leczenia do oczekiwań pacjenta.
							Często też udaje mi się <b>uratować zęby bardzo zniszczone i przeznaczone do ekstrakcji</b>.
							Stosowanie zasad minimalnie interweniujących w tkanki zęba,
							umożliwia uratowanie jak największej ilości własnych zębów pacjenta i pozwala
							na zastosowanie najkorzystniejszych rozwiązań protetycznych.
						</p>
						<p>
							Dwuletni staż podyplomowy w prywatnym gabinecie w Wiedniu w Austrii,
							umożliwił mi szybkie zapoznanie się i wdrożenie nowoczesnych procedur.
							Zgromadzone <b>doświadczenie dwóch pokoleń</b> w połączeniu
							z <b>najnowocześniejszymi technologiami</b> i wiedzą,
							gwarantują najlepszy możliwy standard usług stomatologicznych!
						</p>
					</div>
				</section>
			</article>
		</main>
	);
}

export default About;