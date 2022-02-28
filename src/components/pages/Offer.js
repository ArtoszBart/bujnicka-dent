import '../../styles/main.scss';
import CarPhoto from '../../img/samochut.jpg';
import { Link } from 'react-router-dom';

function Offer() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="offer">
				<div className="banner-title">
					<h1>Oferta</h1>
				</div>
			</div>
			<article className="page-content">
				<aside className="h-desc">
					<p className="center">
						Gabinet specjalizuje się w zaawansowanej protetyce, a szczególnie w ratowaniu zębów bardzo zniszczonych,
						często spisanych przez innych lekarzy na straty.
					</p>
				</aside>
				<section className="offers">
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Wizyta Diagnostyczna</h3>
						<p>
							<b>BEZPŁATNA WIZYTA DIAGNOSTYCZNA</b>, na której dowiesz się, co dzieje się z Twoimi wszystkimi zębami.
						</p>
						<Link to="/offer/diagnostics" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Profilaktyka</h3>
						<p>
							Profilaktyka, to podstawowy dział stomatologii,
							zajmujący się zapobieganiem chorób jamy ustnej oraz uświadamianiem,
							jak ważna w życiu codziennym jest prawidłowa higiena.
						</p>
						<Link to="/offer/prevention" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Stomatologia Estetyczna</h3>
						<p>
							Stomatologia estetyczna zajmuje się przywróceniem lub nadaniem zębom
							jak najbardziej naturalnego wyglądu, czego efektem staje się piękny, naturalny uśmiech.
						</p>
						<Link to="/offer/aesthetic-dentistry" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Stomatologia Cyfrowa</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
						</p>
						<Link to="/offer/digital-dentistry" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Inley'e Onley'e Overlay'e Endokorony </h3>
						<p>
							Inaczej wkłady koronowe - są to wypełnienia zębów o bardzo wysokiej jakości.
						</p>
						<Link to="/offer/onlay-inlay" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Protetyka</h3>
						<p>
							Protetyka to dział stomatologii zajmujący się uzupełnianiem
							utraconych zębów w przypadku, gdy nie jest możliwa ich odbudowa
							zachowawcza lub zostały one utracone z innych powodów.
						</p>
						<Link to="/offer/prosthodontics" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Stomatologia Zachowawcza</h3>
						<p>
							Stomatologia zachowawcza zajmuje się wykrywaniem i leczeniem
							najbardziej rozpowszechnionej choroby zębów, jaką jest próchnica.
						</p>
						<Link to="/offer/conservative-dentistry" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Endodoncja</h3>
						<p>
							Endodoncja jest dziedziną stomatologii zajmującą się leczeniem kanałów w zębach.
						</p>
						<Link to="/offer/endodontics" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Periodontologia</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
						</p>
						<Link to="/offer/periodontics" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Chirurgia Stomatologiczna</h3>
						<p>
							Czasami zęba nie da się już uratować, podejmuję wtedy decyzję o usunięciu - ekstrakcji.
						</p>
						<Link to="/offer/dental-surgery" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Implanty</h3>
						<p>
							Dziedzina chirurgii uzupełniająca brakujący korzeń zęba to implantologia.
						</p>
						<Link to="/offer/implants" className="button">Zobacz więcej</Link>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Leczenie Stawów Skroniowo-Żuchwowych</h3>
						<p>
							Zaburzeniami w funkcji stawów skroniowo-żuchwowych są niekiedy
							przyczyną poważnych problemów w funkcjonowaniu całego narządu żucia.
						</p>
						<Link to="/offer/joints" className="button">Zobacz więcej</Link>
					</div>
				</section>
			</article>
		</main>
	);
}

export default Offer;
