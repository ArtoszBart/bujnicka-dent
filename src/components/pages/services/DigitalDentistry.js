import '../../../styles/main.scss';
import ImportantInfo from '../../fragments/pages/ImportantInfo';

function DigitalDentistry() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="dental-surgery">
				<div className="banner-title">
					<h1>Stomatologia Cyfrowa</h1>
				</div>
			</div>
			<article className="page-content">
				<section aria-labelledby="aesthetic-dentistry-goal" className="page-content-text">
					<h2>Digital Smile Design</h2>
					<p>
						jest cyfrową platformą do <b>poprawy uśmiechu</b> i podniesienia walorów estetycznych zębów.
						Piękny uśmiech sprawia, że jesteśmy postrzegani jako <b>bardziej atrakcyjni i pewni siebie</b>.
					</p>

					<h3>Co to jest?</h3>
					<p>
						<dfn><abbr title="Digital Smile Design">DSD</abbr></dfn> została stworzona przez brytyjskiego dentystę
						Christiana Coachmana jako platforma współpracy pomiędzy pacjentem, lekarzem prowadzącym i zespołem wykonującym plan leczenia.
					</p>

					<h3>Jak działa <abbr title="Digital Smile Design">DSD</abbr>?</h3>
					<p>
						Zdarza się, że pacjent spodziewa się innego efektu końcowego niż zaplanowany i zrealizowany przez
						lekarza plan leczenia protetycznego. Rozwiązaniem tego problemu jest
						stworzenie <b>wizualnego planu leczenia</b> i <b>poznanie efektu końcowego</b> -
						nowego uśmiechu jeszcze <b>przed jego zakończeniem</b>. Nowy uśmiech jest <b>indywidualnie zaprojektowany</b>, wyraża
						osobowość pacjenta i jest zgodny z fizycznymi cechami jego twarzy.
					</p>
					<p>
						Doskonałość i precyzja w stomatologii estetycznej i funkcjonalnej nie są przypadkowe, wynikają z odpowiedzialnej i
						konsekwentnej <b>pracy lekarza z pacjentem</b> i całym zespołem. <abbr title="Digital Smile Design">DSD</abbr> znacznie
						ułatwia proces tej współpracy, poprawia diagnostykę i <b>prezentuje wizję efektów leczenia jeszcze w trakcie jego trwania</b>.
						Pacjent decydując się na zastosowanie tej metody ma możliwość wyrazić własne oczekiwania i pragnienia.
						Staje się <b>współtwórcą swojego nowego uśmiechu</b>.
					</p>
					<ImportantInfo>
						Decyzja o podjęciu leczenia jest łatwiejsza, jeśli już na początku można <b>zobaczyć efekt końcowy</b>, na co pozdwala
						metoda <abbr title="Digital Smile Design">DSD</abbr>.
					</ImportantInfo>

					<h3>Metoda <abbr title="Digital Smile Design">DSD</abbr> pozwala na:</h3>
					<ul>
						<li>nawiązanie bliskiej współpracy między pacjentem a lekarzem</li>
						<li>skuteczniejszą komunikację między lekarzem a laboratorium protetycznym</li>
						<li>większą <b>przewidywalność efektów leczenia</b></li>
						<li><b>mniejszą ilość korekt</b> w późniejszym etapie</li>
						<li>
							zbudowanie u pacjenta poczucia zaufania, dzięki czemu rezultaty zostają osiągnięte,
							a marzenie o pięknym uśmiechu zrealizowane
						</li>
					</ul>
					<h3>Procedura stworzenia indywidualnego modelu <abbr title="Digital Smile Design">DSD</abbr>:</h3>
					<ol>
						<li>
							<h4>Konsultacja lekarska</h4>
							<p>
								Obejmuje dokładny wywiad, badanie jamy ustnej, analizę zdjęć rentgenowskich i <b>poznanie oczekiwań pacjenta</b>
							</p>
						</li>
						<li>
							<h4>Sesja fotograficzna</h4>
							<p>
								Na tym etapie wykonywana jest seria fotografii twarzy, zębów i uśmiechu
							</p>
						</li>
						<li>
							<h4>Projektowanie</h4>
							<p>
								Analiza zależności między zębami, ustami, uśmiechem a rysami twarzy i mimiką wyrażającą emocje.
								Dzięki specjalnemu cyfrowemu oprogramowaniu <b>projektuje się nowy uśmiech</b>
							</p>
						</li>
						<li>
							<h4>Konsultacja z pacjentem</h4>
							<p>
								Prezentacja planu leczenia pacjentowi, ewentualne wprowadzenie <b>poprawek</b>
							</p>
						</li>
						<li>
							<h4>Wykonanie prototypu</h4>
							<p>
								Przygotowanie w laboratorium <b>wzoru nowego uśmiechu</b>, który można "przymierzyć"
							</p>
						</li>
						<li>
							<h4>Realizacja projektu</h4>
						</li>
					</ol>
				</section>
			</article>

		</main>
	);
}

export default DigitalDentistry;