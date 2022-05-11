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
						Stomatologia estetyczna zajmuje się przywróceniem lub nadaniem zębom
						jak najbardziej naturalnego wyglądu, czego efektem staje się piękny, naturalny uśmiech.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Stomatologia Cyfrowa"
						link="/offer/digital-dentistry"
					>
						Piękny uśmiech sprawia, że jesteśmy postrzegani jako bardziej atrakcyjni i pewni siebie.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Inley'e Onley'e Overlay'e Endokorony"
						link="/offer/inlay-onlay"
					>
						Inaczej wkłady koronowe - są to wypełnienia zębów o bardzo wysokiej jakości.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Protetyka"
						link="/offer/prosthodontics"
					>
						Dział stomatologii zajmujący się uzupełnianiem
						utraconych zębów, gdy nie jest możliwa ich odbudowa
						lub zostały one utracone z innych powodów.
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
						Periodontologia to dziedzina stomatologii zajmująca się leczeniem chorób błony śluzowej i przyzębia
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Chirurgia Stomatologiczna"
						link="/offer/dental-surgery"
					>
						Czasami zęba nie da się już uratować, podejmuję wtedy decyzję o usunięciu - ekstrakcji.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Implanty"
						link="/offer/implants"
					>
						Dziedzina chirurgii uzupełniająca brakujący korzeń zęba to implantologia.
					</SingleOffer>
					<SingleOffer
						image={CarPhoto}
						title="Leczenie Stawów Skroniowo-Żuchwowych"
						link="/offer/joints"
					>
						Zaburzeniami w funkcji stawów skroniowo-żuchwowych są niekiedy
						przyczyną poważnych problemów w funkcjonowaniu całego narządu żucia.
					</SingleOffer>
				</section>
			</article>
		</main>
	);
}

export default Offer;
