import ImportantInfo from '../../fragments/pages/ImportantInfo';
import ImgDsd from '../../../img/texts/digital/dsd.jpeg';
import ParallaxBaner from '../../fragments/ParallaxBanner'

function DigitalDentistry() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="digital-dentistry" text="Stomatoligia Cyfrowa" />
			<article className="page-content">
				<section aria-labelledby="digital-smile-design">
					<h2 id="digital-smile-design">Digital Smile Design</h2>
					<p>
						Jest cyfrową platformą do <b>poprawy uśmiechu</b> i podniesienia walorów estetycznych zębów.
						Piękny uśmiech sprawia, że jesteśmy postrzegani jako <b>bardziej atrakcyjni i pewni siebie</b>.
					</p>

					<h3>Co to jest?</h3>
					<p>
						<dfn><abbr title="Digital Smile Design">DSD</abbr></dfn> została stworzona przez brytyjskiego dentystę
						Christiana Coachmana jako platforma współpracy pomiędzy pacjentem, lekarzem prowadzącym i zespołem wykonującym plan leczenia.
					</p>
					<div className="text-img downright">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={ImgDsd} alt="Digital Smile Design" />
									<span>DSD</span>
								</div>
							</div>
							<h3>Jak działa <abbr title="Digital Smile Design">DSD</abbr>?</h3>
							<p>
								<b>Doskonałość i precyzja</b> w stomatologii estetycznej i funkcjonalnej nie są przypadkowe,
								wynikają z odpowiedzialnej i konsekwentnej <b>pracy lekarza z pacjentem</b> i całym
								zespołem. <abbr title="Digital Smile Design">DSD</abbr> znacznie ułatwia proces tej współpracy, poprawia
								diagnostykę i prezentuje wizję efektów leczenia jeszcze w trakcie jego trwania.
								Stworzenie <b>wizualnego planu leczenia</b> umożliwia poznanie <b>efektu końcowego</b> - nowego uśmiechu
								jeszcze przed jego zakończeniem.
							</p>
							<p>
								<b>Pacjent</b> decydując się na zastosowanie tej metody ma możliwość wyrazić własne oczekiwania i pragnienia.
								Staje się <b>współtwórcą swojego nowego uśmiechu</b>, unikając sytuacji, w której oczekiwany przez niego efekt
								końcowy jest inny niż zaplanowany i zrealizowany przez lekarza. Dzięki <b>wizualizacji planu leczenia</b>, nowy
								uśmiech jest <b>indywidualnie zaprojektowany</b>, wyraża osobowość pacjenta i jest zgodny z fizycznymi
								cechami jego twarzy.
							</p>
						</div>
					</div>
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