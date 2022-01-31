import '../../styles/main.scss';
import CarPhoto from '../../img/samochut.jpg';

function Offer() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="about">
				<div className="banner-title">
					<h1>Oferta</h1>
				</div>
			</div>
			<section className="page-content">
				<p className="center">
					Tu będzie jakiś tekst generalnie o usługach.
					Fajnie było by tu dodać że specjalizuje się w ratowaniu zębów,
					które inni lekarze spisali na straty :)
				</p>
				<div className="offers">
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Onley'e oraz Inley'e</h3>
						<p>
							Inaczej wkłady koronowe - są to wypełnienia zębów o bardzo wysokiej jakości.
						</p>
						<a href="/offer/onlay-inlay" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Profilaktyka</h3>
						<p>
							Profilaktyka, to podstawowy dział stomatologii,
							zajmujący się zapobieganiem chorób jamy ustnej oraz uświadamianiem,
							jak ważna w życiu codziennym jest prawidłowa higiena.
						</p>
						<a href="/offer/prevention" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Stomatologia estetyczna</h3>
						<p>
							Stomatologia estetyczna zajmuje się przywróceniem lub nadaniem zębom
							jak najbardziej naturalnego wyglądu, czego efektem staje się piękny, naturalny uśmiech.
						</p>
						<a href="/offer/aesthetic-dentistry" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Stomatologia zachowawcza</h3>
						<p>
							Stomatologia zachowawcza zajmuje się wykrywaniem i leczeniem
							najbardziej rozpowszechnionej choroby zębów, jaką jest próchnica.
						</p>
						<a href="/offer/conservative-dentistry" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Endodoncja</h3>
						<p>
							Endodoncja jest dziedziną stomatologii zajmującą się leczeniem kanałów w zębach.
						</p>
						<a href="/offer/endodontics" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Periodontologia</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
						</p>
						<a href="/offer/periodontics" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Protetyka</h3>
						<p>
							Protetyka to dział stomatologii zajmujący się uzupełnianiem
							utraconych zębów w przypadku, gdy nie jest możliwa ich odbudowa
							zachowawcza lub zostały one utracone z innych powodów.
						</p>
						<a href="/offer/prosthodontics" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Implanty</h3>
						<p>
							Dziedzina chirurgii uzupełniająca brakujący korzeń zęba to implantologia.
						</p>
						<a href="/offer/implants" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Chirurgia stomatologiczna</h3>
						<p>
							Czasami zęba nie da się już uratować, podejmuję wtedy decyzję o usunięciu - ekstrakcji.
						</p>
						<a href="/offer/dental-surgery" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Leczenie stawów skroniowo-żuchwowych</h3>
						<p>
							Zaburzeniami w funkcji stawów skroniowo-żuchwowych są niekiedy
							przyczyną poważnych problemów w funkcjonowaniu całego narządu żucia.
						</p>
						<a href="/offer/joints" className="button">Zobacz więcej</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Offer;
