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
								<dfn>Protetyka</dfn> to dział stomatologii zajmujący się <b>uzupełnianiem utraconych tkanek zębów</b> w przypadku,
								gdy nie jest możliwa ich odbudowa zachowawcza lub zostały one całkowicie utracone z innych powodów.
							</p>
							<p>
								Dotyczy zarówno uzupełnienia braku pojedyńczego zęba, jak i braku całej grupy zębów. Pozwala ona
								na <b>odtworzenie wcześniejszej</b> sytuacji w jamie ustnej, <b>przywrócenie pełnej funkcjonalności</b> narządu żucia
								oraz <b>pięknego uśmiechu</b>.
							</p>
						</div>
					</div>
					<p>
						Dzisiejsza protetyka daje szeroki wachlarz różnych rozwiązań, <b>dostosowanych do możliwości finansowych</b> pacjenta.
						Zostały one opisane niżej.
					</p>

					<h3>Dlaczego warto podjąć leczenie protetyczne</h3>
					<p>
						Braki zębowe mają bardzo negatywny wpływ na pozostałe zęby. Powodują, że:
					</p>
					<ul>
						<li>zęby sąsiadujące z luką przechylają się w jej stronę</li>
						<li>zęby przeciwstawne "wychodzą" ze swoich zębodołów zajmując miejsce po utraconych zębach</li>
						<li>w miejscu usuniętego zęba zanika kość</li>
					</ul>
					<p>
						To wszystko ma wpływ na relację między szczęką a żuchwą
						i <b>może doprowadzić do</b> <Link to="/offer/joints">chorób stawów skroniowo-żuchwowych</Link>, nieprawidłowości zgryzowych,
						utraty kolejnych zębów lub utraty estetyki, a w skrajnych przypadkach nawet problemów psychicznych.
					</p>

					<ImportantInfo>Utraconego zęba warto <b>jak najszybciej</b> uzupełnić nowym.</ImportantInfo>
				</section>
				<section aria-labelledby="crown-inlays" className="page-content-text">
					<h2 id="crown-inlays">Wkłady koronowe</h2>
					<p>
						Tak zwane inley'e, onley'e, overlay'e oraz endokorony - odtwarzają utracone tkanki zęba.
					</p>
					<p>
						(<Link to="/offer/inlay-onlay">Pełny artykuł o wkładach koronowych znaduje się tutaj</Link>)
					</p>

					<h3>Wkłady koronowo-korzeniowe</h3>
					<p>
						Wykonywane są <b>w zębach leczonych kanałowo</b> i są rodzajem sztyftu cementowanego w korzeniu jako podbudowa pod koronę protetyczną.
						Wskazaniem do ich wykonania jest znaczne zniszczenie tkanek zęba w wyniku rozległej
						próchnicy lub jego złamanie.
					</p>
					<p>
						Wkłady koronowo-korzeniowe <b>wykonywane są w laboratorium protetycznym</b> po uprzednim pobraniu wycisku
						odpowiednio przygotowanego zęba. Materiałem służącym do jego wykonania są różne stopy metali, np.
						chromo-kobaltowe, złoto, tytan oraz cyrkon. Decyzję o wyborze rodzaju materiału podejmuje lekarz.
					</p>
				</section>
				<section aria-labelledby="prosthetic-crowns" className="page-content-text">
					<h2 id="prosthetic-crowns">Korony protetyczne</h2>
					<p>
						Są uzupełnieniem protetycznym odbudowującym <b>pojedyńczy ząb</b>. Mogą być
						wykonane <b>na zębie żywym lub martwym</b>.
					</p>
					<h3>Rodzaje koron</h3>
					<p>Korony protetyczne możemy podziedzić na 3 rodzaje:</p>
					<ul>
						<li>korona porcelanowa na podbudowie metalowej</li>
						<li>korona pełnoceramiczna na podbudowie cyrkonowej</li>
						<li>korona pełnocyrkonowa</li>
					</ul>
					<h3>Korony pełnoceramiczne</h3>
					<p>
						Są szczególnie <b>godne polecenia</b> ze względu na:
					</p>
					<ul>
						<li>
							pełną biokompatybilność materiału, z jakiego są wykonane (brak chemicznego drażnienia przyległych tkanek)
						</li>
						<li>szczelność i przyleganie</li>
						<li>efekt kosmetyczny idealnie naśladujący naturalny ząb</li>
					</ul>

					<p>
						<b>Wskazania do wykonania korony</b> pojawiają się gdy zniszczenia zęba przez pruchnicę są już rozległe,
						w zębie znajdują się liczne wypełnienia, złamanie zęba lub wyłamanie jednej ze ścianek, korekta kształtu
						lub koloru lub konieczne jest wykorzystanie zęba jako filaru mostu protetycznego
					</p>
					{/* Wskazania do wykonania korony:
					-rozlegle zniszczenie zęba próchnicą
					-liczne wypełnienia w zębie
					-złamanie całego zęba lub wyłamanie jednej ze ścianek
					-korekta kształtu lub koloru zęba
					-konieczność wykorzystania zęba jako filaru mostu protetycznego */}

					<h3>Etapy wykonania korony:</h3>
					<ol>
						<li>
							<h4>Przygotowanie zęba</h4>
							<p>
								W przypadku zębów martwych konieczne jest wcześniejsze wykonanie wkładu koronowo-korzeniowego jako
								podbudowy pod koronę.
							</p>
							<p>
								W przypadku zęba żywego konieczne jest zeszlifowanie zewnętrznej warstwy grubości 1-1,5 mm i stworzenie
								miejsca na przyszłą koronę. Zabieg przeprowadzany jest w znieczuleniu miejscowym.
							</p>
						</li>
						<li><p>Pobranie wycisków obydwu szczęk.</p></li>
						<li><p>Zabezpieczenie oszlifowanego zęba akrylową koroną tymczasową wykonywaną w gabinecie.</p></li>
						<li><p>Wysłanie wycisków do labolatorium protetycznego.</p></li>
						<li><p>Na kolejnej wizycie, po otrzymaniu nowej korony z labolatorium, jest ona zacementowywana do zęba.</p></li>
					</ol>

					<ImportantInfo>
						Korony protetyczne są <b>dopasowane kształtem i kolorem</b> do sąsiednich zębów w taki sposób,
						aby <b>nie odróżniały się od naturalnych zębów</b> pacjenta.
					</ImportantInfo>
				</section>
				<section aria-labelledby="prosthetic-bridges" className="page-content-text">
					<h2 id="prosthetic-bridges">Mosty</h2>
					<p>
						Są uzupełnieniem protetycznym <b>złożonym z szeregu koron</b>, uzupełniającym brak pojedyńczego
						zęba lub kilku zębów. Cementowane są na stałe do zębów filarowych.
					</p>
					<p>
						Procedura wykonania mostów jest taka sama jak w przypadku koron protetycznych.
					</p>
					<h3>Most teleskopowy</h3>
					<p>
						Szczególnym rodzajem mostu jest <b>most teleskopowy</b>, którego filarami mogą być zarówno zęby własne
						pacjenta, jak i implanty.
					</p>
					<p>
						Jest to most ruchomy, czyli <b>wyjmowany z jamy ustnej</b>, ale mający szczególne zalety:
					</p>
					<ul>
						<li>
							w przypadku zbyt małej ilości własnych zębów pacjenta, wykonanie dodatkowych filarów w postaci implantów
							umożliwia uzupełnienie brakujących zębów mostem i <b>uniknięcie protezy</b>
						</li>
						<li>
							dzięki właściwościom amortyzującym <b>mniej obciąża zęby</b>, co ma szczególne znaczenie w przypadku
							zębów słabiej rokujących, np. z zanikiem kości w przypadku chorób przyzębia
						</li>
						<li>
							ze względu na możliwość jego wyjęcia, <b>umożliwia jego przerobienie</b> w przypadku konieczności ekstrakcji
							któregoś z filarów
						</li>
					</ul>
				</section>
				<section aria-labelledby="dentures" className="page-content-text">
					<h2 id="dentures">Protezy</h2>
					<p>Protezy są uzupełnieniami protetycznymi, możliwymi do wyjęcia z ust w dowolnym momencie.</p>

					<h3>Protezy akrylowe częściowe lub całkowite</h3>
					<p>
						Zwane są też protezami osiadającymi, ze względu na zjawisko osiadania
						protezy wraz z zanikiem kości w miejscach braków zębowych. Są one utrzymywane są na zębach dzięki specjalnie
						ukształtowanym <b>metalowym klamrom</b>.
					</p>
					<h3>Protezy Szkieletowe</h3>
					<p>
						Podparte są <b>na zębach własnych pacjenta</b> specjalnymi elementami stanowiącymi integralną
						część protezy. Daje to <b>bardzo dobrą stabilizację</b> i pozwala na ograniczenie zasięgu, np. płyty
						podniebiennej. To z kolei sprzyja znacznemu <b>zwiększeniu komfortu użytkowania</b> protezy.
					</p>
					<h3>Protezy bezklamrowe</h3>
					<p>
						Są one <b>wersją kosmetyczną protez szkieletowych</b>. Utrzymywane są na zębach dzięki różnego
						rodzaju zamkom, przymocowywanym do protezy i koron porcelanowych, więc wymagane jest wykonanie po obydwu
						stronach szczęki dwóch zblokowanych koron porcelanowych.
					</p>
					<p>
						Zaletą tych protez jest <b>bardzo dobry efekt kosmetyczny</b>, ponieważ elementy utrzymujące protezę są umieszczone
						wewnątrz protezy i niewidoczne na zewnątrz
					</p>
					<h3>Protezy natychmiastowe</h3>
					<p>
						Protezy te są <b>akrylowe</b>, wykonywane w sytuacji konieczności jednoczesnej ekstrakcji
						wielu zębów, np. w odcinku przednim, lub prowadzące do całkowitego bezzębia.
					</p>
					<p>
						Zabieg ekstrakcji wykonuje się w momencie, gdy proteza jest już wykonana, co umożliwia
						pacjentowi <b>uniknięcie sytuacji pozostania bez zębów</b>. Najpierw więc pobierane są wyciski do protez, a dopiero na
						kolejnej wizycie ekstrakcje zębów.
					</p>
					<p>
						Proteza tego rodzaju <b>może być użytkowana tylko do 6 miesięcy</b>, póżniej wymaga wymiany z powodu zmienionego w wyniku gojenia dziąsła.
					</p>
				</section>
				<section aria-labelledby="why-prosthodontics" className="page-content-text">
					<h3>Wykonanie protez</h3>
					<p>
						Protezy można wykonać <b>po całkowitym wyleczeniu z próchnicy</b> wszystkich zębów, usunięciu zębów nie
						nadających się do odbudowy protetycznej lub nie rokujących dobrze (np. rozchwianych)
						i <b>przy dobrej kondycji przyzębia</b>.
					</p>
					<p>
						Na pierwszej wizycie pobierane są <b>wyciski</b> obydwu szczęk, a na kolejnych (ok. 2-3) odbywają się tzw.
						przymiarki, podczas których <b>pacjent może zobaczyć efekt końcowy</b> i wnieść <b>ewentualne korekty</b> w kolorze
						lub ustawieniu zębów.
					</p>
					<p>
						Dzięki tym rozwiązaniom możemy osiągnąć <b>doskonałe efekty estetyczne</b>!
					</p>

					<ImportantInfo>
						Przywrócenie pełnej funkcji narządu żucia wpływa na <b>dobre samopoczucie</b> i prawidłowe <b>funkcjonowanie całego organizmu</b>.
					</ImportantInfo>

				</section>
			</article>
		</main >
	);
}

export default Prosthodontics;
