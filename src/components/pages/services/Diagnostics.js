import '../../../styles/main.scss';
import { Link } from 'react-router-dom';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import CarPhoto from '../../../img/samochut.jpg';

function Diagnostics() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="diagnostics">
				<div className="banner-title">
					<h1>Wizyta Diagnostyczna</h1>
				</div>
			</div>
			<article className="page-content">
				<section aria-labelledby="what-is-it" className="page-content-text">
					<h2 id="what-is-it">Na czym polega?</h2>
					<p>
						Przychodząc do gabinetu stomatologicznego, często tylko wtedy, gdy "coś dzieje się z zębem",
						pacjent skupia się na rozwiązaniu tylko tego jednego problemu, zapominając lub zaniedbując pozostałe zęby.
					</p>
					<p>
						Dzięki dokładnemu badaniu jamy ustnej podczas <b>bezpłatnej wizyty diagnostycznej</b> pacjent
						może zapoznać się z sytuacją dotyczącą wszystkich zębów, dziąseł, błony śluzowej i stawów skroniowo-żuchwowych.
					</p>
					<div className="text-img list-img">
						<div>
							<p>Pod koniec wizyty otrzymuje <b>plan leczenia</b>, który zawiera następujące informacje:</p>
							<ul>
								<li>plan leczenia zachowawczego</li>
								<li>możliwość "<Link to="/offer/digital-dentistry" className="text-link">poprawienia uśmiechu</Link>"</li>
								<li>projekt zmiany relacji zwarciowych, czyli sposobu, w jaki kontaktują się ze sobą zęby (ma to bardzo duży wpływ na zdrowie ogólne, np. chroniczne występowanie migren)</li>
								<li>1-3 projektów uzupełnienia braków zębowych</li>
								<li>wstępną symulację finansową</li>
							</ul>
						</div>
						<div className="photos">
							<div className="page-photo">
								<img src={CarPhoto} alt="" />
								<span>Zdjęcie</span>
							</div>
						</div>
					</div>
					<ImportantInfo>
						<b>Bezpłatna wizyta diagnostyczna</b> daje wiedzę na temat zębów i całego narządu żucia już na pierwszej wizycie!
					</ImportantInfo>
				</section>
			</article>
		</main >
	);
}

export default Diagnostics;
