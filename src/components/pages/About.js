import '../../styles/main.scss';
import Banner from '../../img/turtle.jpg';
import PhotoBujnicka from '../../img/bujnicka-profile.jpg';

function About() {

	return (
		<main className="main-wrapper" id="about" role="main">
			<div className="banner">
				{/* <img src={Banner} alt="banner" className="page-banner-photo" /> */}
			</div>
			<section className="page-content">
				<div className="employee">
					<img src={PhotoBujnicka} alt="Magdalena Bujnicka" />
					<div className="employee-about">
						<h2>Magdalena Bujnicka</h2>
						<p className="subheadder">Lekarz stomatolog</p>
						<p>Zaczęła się w 1953 roku.
							{/* RODZICE */}
							Moja mama Maria Bałuta (na zdjęciu pierwsza z lewej w górnym rzędzie),
							rozpoczęła studia na Wydziale Stomatologicznym Akademii Medycznej w Gdańsku.
							Po studiach połączyła swoją lekarską pasję z lekarzem weterynarii Bohdanem Bujnickim (na zdjęciu w górnym rzędzie przy cyfrze 1),
							który w 1959 roku ukończył Wydział Weterynarii w Warszawie.
							{/* DORASTANIE */}
						</p><p>
							Pierwszy gabinet powstał w 1966 roku na Pomorzu Środkowym,
							a ja wyrastałam w jego sąsiedztwie w atmosferze niesienia pomocy pacjentom.
							Od wczesnego dzieciństwa wiedziałam, że moim powołaniem jest... również być lekarzem!
							{/* O MNIE */}
						</p><p>
							Jestem absolwentką Pomorskiej Akademii Medycznej w Szczecinie i od pierwszych lat studiów
							mogłam liczyć na wsparcie oraz poparte wieloletnim doświadczeniem cenne rady rodziców lekarzy.
							Wpojono mi, że dobro pacjenta jest najwyższą wartością.
							Drugi gabinet powstał w 1993 roku w Warszawie.
							{/* OFERTA */}
						</p><p>
							Moim pacjentom zapewniam całkowitą pomoc stomatologiczną,
							począwszy od profilaktyki, aż do uzupełnienia braków zębowych.
							Zawsze projektuję kilka rozwiązań, dopasowanych do możliwości finansowych pacjenta.
							Umiejętność słuchania pozwala mi zbliżyć plan leczenia do oczekiwań pacjenta.
							Często też udaje mi się uratować zęby przeznaczone przez innych lekarzy do ekstrakcji.
							Stosowanie zasad minimalnie interweniujących w tkanki zęba,
							umożliwia uratowanie jak największej ilości własnych zębów pacjenta i pozwala
							na zastosowanie najkorzystniejszych rozwiązań protetycznych.
							Dwuletni staż podyplomowy w prywatnym gabinecie w Wiedniu w Austrii,
							umożliwił mi szybkie zapoznanie się i wdrożenie nowoczesnych procedur.
							Zgromadzone doświadczenie dwóch pokoleń w połączeniu z najnowocześniejszymi
							technologiami i wiedzą, gwarantują najlepszy możliwy standard usług stomatologicznych!
							Zapraszam!
							lek.stom. Magdalena Bujnicka
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
