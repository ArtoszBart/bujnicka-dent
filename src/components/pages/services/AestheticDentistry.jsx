import { Link } from 'react-router-dom';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import Images from '../../../img/texts/aesthetics';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import AdhesiveTechniqueModal from '../../fragments/modals/AdhesiveTechniqueModal';
import useModal from "../../fragments/customHooks/useModal";
import ImgComparer from "../../fragments/ImgComparer";

function AestheticDentistry() {
	const UseModal = useModal();

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="aesthetic-dentistry" text="Stomatoligia Estetyczna" />
			<article className="page-content">
				<section aria-labelledby="aesthetic-dentistry-goal">

					<div className="text-img upright">

						<div className="photos">
							<ImgComparer
								img1={Images.WhiteningBefore}
								label1="Przed"
								img2={Images.WhiteningAfter}
								label2="Po"
							/>
						</div>
						<h2 id="aesthetic-dentistry-goal">Cel stomatologi estetycznej</h2>
						<p>
							<dfn>Stomatologia estetyczna</dfn> zajmuje się nadaniem zębom jak najbardziej naturalnego wyglądu lub ich upiększeniem,
							czego efektem staje się piękny, naturalny uśmiech.
						</p>
					</div>

				</section>
				<section aria-labelledby="teeth-whitening">
					<h2 id="teeth-whitening">Wybielanie zębów</h2>
					<div className="text-img upright">

						<div className="photos">
							<div className="page-photo">
								<img src={Images.TrayBasedWhitening} alt="Szyna wybielająca" />
								<span>Szyna wybielająca</span>
							</div>
						</div>
						<h3>Metoda nakładkowa</h3>
						<p>
							Dotyczy <b>zębów żywych</b> i polega na wykonaniu specjalnej szyny wybielającej, do której aplikuje
							się <b>żel wybielający</b> na określony czas. Już po pierwszej aplikacji żelu widoczny jest efekt wybielenia zębów.
							Ilość koniecznych zabiegów zależy od indywidualnej podatności zębów na działanie żelu i od stopnia ich rozjaśnienia.
						</p>
					</div>
					<h3>Metoda dokomorowa</h3>
					<p>
						Dotyczy <b>zębów martwych</b> i polega na aplikacji żelu wybielającego bezpośrednio do komory zęba.
					</p>

				</section>
				<section aria-labelledby="icon-treatment">
					<h2 id="icon-treatment">Zabieg ICON</h2>
					<div className="text-img downright">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={Images.EnamelStains} alt="" />
									<span>Plamy na szkliwie</span>
								</div>
							</div>
							<p>
								Nazwa zabiegu pochodzi od nazwy fabrycznej stosowanego preparatu - polega na <b>likwidacji białych plam</b> na
								powierzchni szkliwa, które są <b>odwapnieniami</b> pojawiającymi się po leczeniu ortodontycznym lub
								antybiotykoterapii. Mogą również występować jako wrodzone defekty szkliwa.
							</p>
							<p>
								Przeprowadza się go stosując <b>płynną żywicę</b>, która wielokrotnie wtarta w powierzchnię szkliwa powoduje zrekonstruowanie
								uszkodzonej powierzchni zęba. Jest to <b>bardzo delikatna metoda leczenia</b> wczesnego stadium próchnicy oraz defektów szkliwa,
								pozwalająca na <b>przywrócenie naturalnego koloru i wyglądu zęba</b>.
							</p>
						</div>
					</div>
				</section>
				<section aria-labelledby="fillings-replacement">
					<h2 id="fillings-replacement">Wymiana wypełnień</h2>
					<p>
						Zęby przednie często mają liczne, nieestetyczne, przebarwione lub niekompletne wypełnienia.
						Wymiana tych wypełnień na nowe może dać <b>bardzo dobry efekt estetyczny</b>.
						Warunkiem takiej wymiany jest wystarczająca ilość tkanek własnych zęba.
						W przeciwnym razie rozważyć trzeba inną metodę poprawy estetyki.
					</p>
				</section>
				<section aria-labelledby="veneers">
					<h2 id="veneers">Licówki</h2>
					<p>
						Są to cieniutkie <b>nakładki protetyczne</b> tylko na powierzchnię wargową lub policzkową zębów.
						Przeznaczone są dla pacjentów, którzy znacząco chcą <b>poprawić wygląd uśmiechu</b>.
					</p>
					<div className="text-img normal">
						<div className="photos">
							<div className="page-photo">
								<img src={Images.Veneers} alt="veneers" />
								<span>Licówki</span>
							</div>
						</div>
						<div>
							<h3>Wskazania do licówek:</h3>
							<ul>
								<li>zęby przebarwione, w których <b>zabiegi wybielające nie przyniosły oczekiwanych rezultatów</b></li>
								<li>zmiana kształtu, wielkości i wzajemnych relacji zębów</li>
								<li>rozległe wrodzone lub nabyte <b>defekty szkliwa</b>, np. nierówna powierzchnia szkliwa, pęknięcia, ubytki</li>
								<li><b>likwidacja diastem</b> (przerw) między zębami</li>
							</ul>
						</div>
					</div>
					<h3>Przeciwwskazania do wykonania licówek:</h3>
					<ul>
						<li>zęby martwe</li>
						<li>zęby z rozległymi ubytkami lub wypełnieniami kompozytowymi</li>
						<li>rozległe braki zębów</li>
						<li>
							parafunkcje typu zgrzytanie, zaciskanie zębów.
							Konieczne jest najpierw <Link to="/offer/joints" className="text-link">Leczenie Stawów Skroniowo-Żuchwowych</Link>
						</li>
						<li>wady zgryzu</li>
						<li>choroby przyzębia</li>
						<li>zła higiena jamy ustnej</li>
					</ul>
					<h3>Wykonanie licówek:</h3>
					<ol>
						<li>
							<h4>Wizyta konsultacyjno-diagnostyczna</h4>
							<p>
								Polega na ocenie istniejących warunków i poznaniu oczekiwań pacjenta. Pobierane są wyciski w
								celu wykonania <b>modeli orientacyjnych</b>, na których w laboratorium protetycznym wykonuje się
								tzw. <b>mock-up</b> - tymczasowe nieinwazyjne licówki
							</p>
						</li>
						<li>
							<h4>Wizyta wizualizacyjna</h4>
							<p>
								Za pomocą mock-up'u możliwe jest pokazanie pacjentowi na jego własnych zębach <b>przyszłego efektu</b> zmiany
								wyglądu zębów. Na tym etapie możliwa jest zmiana kształtu zaprojektowanych licówek
							</p>
						</li>
						<li>
							<h4>Wykonanie</h4>
							<p>
								Przygotowanie zębów, pobranie wycisku i zabezpieczenie licówkami tymczasowymi
							</p>
						</li>
						<li>
							<h4>Wizyta końcowa</h4>
							<p>
								Przyklejenie licówek do zębów w specjalnej <span className='text-link' onClick={() => UseModal.openModal("Technika adhezyjna")}>technice adhezyjnej</span>
							</p>
						</li>
					</ol>
					<ImportantInfo>
						Obecnie licówki są <b>najpopularniejszą metodą</b> na realizację marzenia o pięknym, białym uśmiechu.
					</ImportantInfo>
				</section>
				<section aria-labelledby="rest-treatments">
					<h2 id="rest-treatments">Inne zabiegi</h2>
					<h3>Wkłady koronowe</h3>
					<p>
						Pełen opis wkładów koronowych znajduje się w
						zakładce <Link to="/offer/inlay-onlay" className="text-link">Inley'e, Onley'e, Overlay'e, Endokorony</Link>
					</p>
					<h3>Korony estetyczne</h3>
					<p>
						Pełen opis koron estetycznych znajduje się w
						zakładce <Link to="/offer/prosthodontics" className="text-link">Protetyka</Link>
					</p>
					<h3>Mosty</h3>
					<p>Pełen opis mostów znajduje się w
						zakładce <Link to="/offer/prosthodontics" className="text-link">Protetyka</Link>
					</p>
				</section>
				<section aria-labelledby="clear-aligner">
					<h2 id="clear-aligner">Clear Aligner</h2>
					<div className="text-img downright">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={Images.ClearAligner} alt="" />
									<span>Nakładka Clear Aligner</span>
								</div>
							</div>
							<p>
								Korekta małych nieprawidłowości w ustawieniu zębów, może zostać wykonana za pomocą metody <dfn>Clear Aligner</dfn>.
								Jest to estetyczna alternatywa dla ortodontycznych aparatów stałych.
							</p>
							<p>
								Metoda ta wykorzystuje <b>przezroczyste</b>, biokompatybilne, <b>silikonowe nakładki</b>, które nosi się przez 24h i zdejmuje
								tylko do jedzenia. Dzięki temu, że są przezroczyste i <b>praktycznie niewidoczne</b> na zębach,
								zapewniają najwyższy stopień estetyki podczas całego procesu leczenia. Idealnie gładkie i dobrze dopasowane
								do zębów i dziąseł, zapewniają <b>wysoki komfort</b> ich użytkowania.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Metoda <b>Clear Aligner</b> jest zdecydowanie tańsza i bardziej komfortowa niż tradycyjne leczenie ortodontyczne.
					</ImportantInfo>
					<h3>Przebieg leczenia:</h3>
					<ol>
						<li>
							<p>
								<b>Wizyta konsultacyjna</b> - polega na ocenie, czy pacjent kwalifikuje się do tej metody leczenia.
								Konieczne jest wykonanie <b>pantomogramu</b> i niekiedy <b>cefalometrii</b> (zdjęcia twarzoczaszki).
							</p>
						</li>
						<li>
							<p>
								Przygotowanie indywidualnego <b>planu leczenia</b>.
							</p>
						</li>
						<li>
							<p>
								Pobranie wycisków w celu wykonania w laboratorium protetycznym <b>modeli</b>, na których
								technik dokona pierwszych przesunięć zębów, tzw. <b>set-up</b>.
							</p>
						</li>
						<li>
							<p>
								Pacjent otrzymuje pierwszy <b>zestaw nakładek</b> o różnej twardości: <b>soft</b>, <b>medium</b> i <b>hard</b> na
								obydwa łuki zębowe. Każdą z nakładek nosi się około 7 dni.
							</p>
						</li>
						<li>
							<p>
								Po około 3-4 tygodniach pobierane są <b>kolejne wyciski</b>, które
								odzwierciedlają <b>aktualne zmiany w ustawieniu zębów</b>. Na ich podstawie wykonuje się zestaw kolejnych 3 nakładek.
								Ten punkt jest <b>powtarzany do momentu osiągnięcia planowanego efektu leczenia</b>.
							</p>
						</li>
						<li>
							<p>
								Ostatnim krokiem leczenia jest <b>stabilizacja ustawienia zębów</b> w nowej pozycji (retencji).
								Jest on <b>2x dłuższy od czasu leczenia</b> i wymaga noszenia aparatu retencyjnego,
								którym najczęściej jest ostatnia nakładka.
							</p>
						</li>
					</ol>
				</section>

				<AdhesiveTechniqueModal hook={UseModal} />
			</article>
		</main>
	);
}

export default AestheticDentistry;
