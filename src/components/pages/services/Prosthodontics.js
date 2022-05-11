import '../../../styles/main.scss';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import CarPhoto from '../../../img/samochut.jpg';
import { Link } from 'react-router-dom';

function Prosthodontics() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="prosthodontics" text="Protetyka" />
			<article className="page-content">
				<section aria-labelledby="what-is-prosthodontics" className="page-content-text">
					<h2 id="what-is-prosthodontics">Czym jest protetyka</h2>
					<div className="text-img">
						<div>
							<div className="page-photo">
								<img src={CarPhoto} alt="" />
								<span> Braki w zębach</span>
							</div>
							<p>
								Protetyka to dział stomatologii zajmujący się uzupełnianiem utraconych zębów w przypadku,
								gdy nie możliwa jest ich odbudowa lub zostały one utracone.
							</p>
							<p>
								Dotyczy zarówno uzupełnienia
								braku pojedyńczego zęba jak i braku całej grupy zębów. Pozwala na odtworzenie wcześniejszej
								sytuacji w jamie ustnej, przywrócenie pełnej funkcji narządu żucia oraz pięknego uśmiechu.
							</p>
						</div>
					</div>
				</section>
				<section aria-labelledby="why-prosthodontics" className="page-content-text">
					<h2 id="why-prosthodontics">Skutki braku leczenia protetycznego</h2>
					<div className="text-img list-img">
						<div>
							<p>
								Braki zębowe mają bardzo negatywny wpływ na pozostałe zęby. Powodują, że:
							</p>
							<ul>
								<li>zęby sąsiadujące z luką przechylają się w jej stronę</li>
								<li>ząb przeciwstawny "wychodzi" ze swojego zębodołu zajmując miejsce po utraconym zębie</li>
								<li>w miejscu usuniętego zęba zanika kość</li>
							</ul>
							<p>
								To wszystko ma wpływ na relację między szczęką a żuchwą i może doprowadzić
								na przykład <Link to="/offer/joints">chorób stawów skroniowo-żuchwowych</Link>, nieprawidłowości zgryzowych, utraty kolejnych zębów lub utraty
								estetyki, a w skrajnych przypadkach nawet problemów psychicznych.
							</p>
						</div>
						<div className="photos">
							<div className="page-photo">
								<img src={CarPhoto} alt="" />
								<span>Zdjęcie</span>
							</div>
						</div>
					</div>

				</section>
				<section aria-labelledby="why-prosthodontics" className="page-content-text">
					<h2 id="why-prosthodontics">Dlaczego warto podjąć leczenie protetyczne?</h2>
					<p>
						Utraconego zęba warto jak najszybciej uzupełnić nowym. Dzisiejsza protetyka
						daje nam szeroki wachlarz różnych rozwiązań, dostosowanych do możliwości finansowych pacjenta.
						Oto one:
					</p>
					<ul>
						<li>uwkłady koronowe (onley'e oraz inley'e) i wkłady korzeniowe</li>

						<li>ukorony i mosty</li>

						<li>uprotezy akrylowe i szkieletowe</li>

						<li>uprace kombinowane, powstające z połączenia koron, protez szkieletowych i różnych
							elementów utrzymujących (zamków, rygli) - protezy bezklamrowe</li>

						<li>mosty teleskopowe</li>

						<li>implanty</li>
					</ul>
					<div className="page-gallery">
						<div className="page-photo">
							<img src={CarPhoto} alt="" />
							<span>Przed protetyką</span>
						</div>
						<div className="page-photo">
							<img src={CarPhoto} alt="" />
							<span>Po protetyce</span>
						</div>
					</div>
					<ImportantInfo>
						Dzięki tym rozwiązaniom możemy osiągnąć doskonałe efekty estetyczne!
					</ImportantInfo>
				</section>
			</article>
		</main >
	);
}

export default Prosthodontics;
