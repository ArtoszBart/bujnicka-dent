import '../../styles/main.scss';
import CarPhoto from '../../img/samochut.jpg';
import ParallaxBaner from '../fragments/ParallaxBanner'
import SingleOffer from '../fragments/SingleOffer';

function Offer() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="offer" text="Oferta" />
			<article className="page-content">
				<aside className="h-desc">
					<p className="center">
						Gabinet specjalizuje się w zaawansowanej protetyce, a szczególnie w ratowaniu zębów bardzo zniszczonych.
					</p>
				</aside>
				<section className="offers">
					<SingleOffer
						image={CarPhoto}
						title="Wizyta Diagnostyczna"
						link="/offer/diagnostics"
					>
						<b>BEZPŁATNA WIZYTA DIAGNOSTYCZNA</b>, na której dowiesz się, co dzieje się z Twoimi wszystkimi zębami.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Profilaktyka"
						link="/offer/prevention"
					>
						Profilaktyka, to podstawowy dział stomatologii,
						zajmujący się zapobieganiem chorób jamy ustnej oraz uświadamianiem,
						jak ważna w życiu codziennym jest prawidłowa higiena.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Stomatologia Estetyczna"
						link="/offer/aesthetic-dentistry"
					>
						Stomatologia estetyczna zajmuje się nadaniem zębom jak najbardziej naturalnego wyglądu lub ich upiększeniem,
						czego efektem staje się piękny, naturalny uśmiech.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Stomatologia Cyfrowa"
						link="/offer/digital-dentistry"
					>
						Wykorzystując najnowocześniejsze rozwiązania technologiczne, umożliwia pełne zaprojektowanie
						uśmiechu.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Onley'e Endokorony"
						link="/offer/inlay-onlay"
					>
						Inaczej wkłady koronowe, są to wypełnienia zębów o bardzo wysokiej jakości.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Protetyka"
						link="/offer/prosthodontics"
					>
						Dział stomatologii zajmujący się uzupełnianiem
						utraconych zębów, gdy nie jest możliwa ich odbudowa
						lub zostały one utracone.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Stomatologia Zachowawcza"
						link="/offer/conservative-dentistry"
					>
						Stomatologia zachowawcza zajmuje się wykrywaniem i leczeniem
						najbardziej rozpowszechnionej choroby zębów, jaką jest próchnica.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Endodoncja"
						link="/offer/endodontics"
					>
						Endodoncja jest dziedziną stomatologii zajmującą się leczeniem kanałów w zębach.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Periodontologia"
						link="/offer/periodontics"
					>
						Dziedzina stomatologii zajmująca się leczeniem chorób błony śluzowej i przyzębia (dziąseł).
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Chirurgia Stomatologiczna"
						link="/offer/dental-surgery"
					>
						Gdy zęba nie da się już uratować, podejmuję się decyzję o usunięciu jego części lub całości.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Implanty"
						link="/offer/implants"
					>
						Uzupełniają brakujący korzeń, cały ząb lub część uzębienia.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Leczenie Stawów"
						link="/offer/joints"
					>
						Zaburzenia funkcji stawów skroniowo-żuchwowych są przyczyną poważnych problemów ze szczęką oraz
						funkcjonowaniem całego narządu żucia.
					</SingleOffer>
				</section>
			</article>
		</main>
	);
}

export default Offer;
