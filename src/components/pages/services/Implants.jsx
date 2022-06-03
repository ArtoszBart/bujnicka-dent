import ImportantInfo from '../../fragments/pages/ImportantInfo';
import Images from '../../../img/texts/implants';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import AdhesiveTechniqueModal from '../../fragments/modals/AdhesiveTechniqueModal';
import useModal from '../../fragments/customHooks/useModal';

function Implants() {
	const UseModal = useModal();

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="implantology" text="Implanty" />

			<article className="page-content">
				<section aria-labelledby="what-is-implantology">
					<h2 id="what-is-implantology">Czym zajmuje się Implantologia</h2>
					<div className="text-img upright">
						<div className="photos">
							<div className="page-photo">
								<img src={Images.Implant} alt="" />
								<span>Implant</span>
							</div>
						</div>
						<div>
							<p>
								<b>Implantologia</b> to dziedzina chirurgii stomatologicznej zajmująca się <b>uzupełnieniem brakującego korzenia zęba</b>.
								Jest to najbardziej zaawansowana technologicznie metoda leczenia braków zębowych.
								Zęby odbudowane na implantach są <b>najbardziej zbliżone do naturalnych</b> zarówno pod względem
								estetycznym jak i czynnościowym.
							</p>
							<p>
								W leczeniu implantologicznym często wykorzystywane są <b>tymczasowe uzupełnienia protetyczne</b>,
								szczególnie, gdy implant wszczepiany jest w odcinku przednim.
							</p>
							<p>
								W takiej sytuacji wykonuje się koronę
								tymczasową opartą na implancie za pośrednictwem łącznika (jest to natychmiastowe obciążenie implantu) lub
								stosuje się uzupełnienie tymczasowe wykonane w laboratorium protetycznym,
								np. <span className='text-link' onClick={() => UseModal.openModal("Technika adhezyjna")}>most adhezyjny</span>, szynę Essex lub protezę.
							</p>
							<p>
								Dzięki temu pacjent nie wychodzi z gabinetu z widocznym brakiem zęba, co daje
								mu <b>komfort psychiczny i normalne funkcjonowanie</b>.
							</p>
						</div>
					</div>
				</section>
				<section aria-labelledby="implants">
					<h2 id="implants">Implanty</h2>
					<div className="text-img downright">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={Images.ImplantBridge} alt="Próchnica" />
									<span>Most na implantach</span>
								</div>
							</div>
							<p>
								<dfn>Implant</dfn> to inaczej sztuczny korzeń. Jest to mała "śrubka" umieszczana w obrębie kości żuchwy lub
								szczęki i połączona tzw. "łącznikiem" z odbudową protetyczną w postaci korony, mostu lub protezy.
							</p>
							<p>
								Najczęstszym materiałem, z którego wykonany jest implant jest <b>tytan</b>, ale są również implanty wykonane z
								materiału <b>ceramicznego</b> - cyrkonu. Są to materiały biokompatybilne - biologicznie obojętne,
								czyli <b>nie wywołujące reakcji alergicznych</b> w zetknięciu z tkanką żywą.
							</p>

						</div>
					</div>
					<ImportantInfo>
						Powierzchnia implantu jest specjalnie przygotowana do tego, aby <b>stymulować wzrost kości</b> wokół niego w procesie
						tzw. osteointegracji i przyczyniać się do powstania zrostu z żywą tkanką kostną. Proces ten trwa ok. 3-6 miesięcy.
					</ImportantInfo>

					<h3>Zalety implantów</h3>
					<ul>
						<li>
							Wizualnie i czynnościowo są odbierane <b>jak zęby naturalne</b>, poprawiając
							jakość życia umożliwiając spożywanie zróżnicowanych pokarmów i <b>eliminację uczucia dyskomfortu</b>
						</li>
						<li>
							<b>Zapobiegają zanikowi tkanki kostnej</b> i cofaniu się dziąsła, sprzyjając dłuższemu <b>zachowaniu młodego
								wyglądu twarzy</b> (nie występuje zapadanie się policzków)
						</li>
						<li>
							Są uzupełnieniem <b>trwałym i długoczasowym</b>
						</li>
						<li>
							<b>Eliminują konieczność szlifowania zębów</b> żywych i zdrowych, co często jest niezbędne przy zastosowaniu
							innych rozwiązań protetycznych, np. mostów lub protez bezklamrowych
						</li>
						<li>
							Przywracają <b>piękny i naturalny wygląd</b>
						</li>
					</ul>

					<h3>Wskazania do implantacji</h3>
					<ul>
						<li>brak pojedyńczego zęba</li>
						<li>brak grupy zębów, tzw. braki międzyzębowe</li>
						<li>całkowite bezzębie</li>
						<li>brak zawiązka zęba stałego lub kilku zębów stałych</li>
						<li>brak tolerancji na inne uzupełnienia protetyczne</li>
					</ul>
					<p>
						Należy również pamiętać, że istnieją <b>przeciwwskazania</b> do implantacji. Należą do nich głównie choroby
						ogólnoustrojowe, np. cukrzyca, osteoporoza, choroby nowotworowe, autoimmunologiczne.<br />
						Zaburzone są wtedy procesy osteointegracji, na które mają wpływ powyższe stany chorobowe
						lub przyjmowane leki. Paradontoza i zła higiena jamy ustnej również wykluczają możliwość udanej implantacji.
					</p>
					<ImportantInfo>
						Do czynników zwiększonego ryzyka należą palenie tytoniu i nadużywanie napojów alkoholowych.
					</ImportantInfo>
				</section>
				<section aria-labelledby="immediate-implants">
					<h2 id="immediate-implants">Implanty natychmiastowe</h2>
					<p>
						Dużym zainteresowaniem cieszą się <b>implanty natychmiastowe</b>.
					</p>
					<p>
						Można je wykonać wszczepiając implant do zębodołu powstałego bezpośrednio po usunięciu korzenia zęba.
						Technika ta charakteryzuje się <b>wysokim odsetkiem powodzenia</b>. O jej wyborze decyduje chirurg.
					</p>
					<p>
						Przed podjęciem ostatecznej decyzji konieczna jest pełna <b>diagnostyka radiologiczna</b>,
						w tym <b>tomografia komputerowa</b> (<abbr title="Cone Beam Computed Tomography">CBCT</abbr>).
					</p>

					<h3>Kryteria decydujące o implantacji natychmiastowej</h3>
					<ul>
						<li>prawidłowy zębodół (brak utraty tkanek kostnych wokół niego oraz jego odpowiednia szerokość)</li>
						<li>atraumatyczna ekstrakcja</li>
						<li>brak procesu zapalnego</li>
						<li>odpowiednie warunki anatomiczne</li>
						<li>odpowiedni kontur tkanek miękkich</li>
					</ul>

					<h3>Zalety implantów natychmiastowych</h3>
					<ul>
						<li>jeden zabieg chirurgiczny</li>
						<li>minimalna inwazyjność</li>
						<li>szybsze gojenie</li>
						<li>redukcja całkowitego czasu leczenia i ilości wizyt</li>
						<li>zachowanie pierwotnego poziomu tkanek kostnych i miękkich</li>
						<li>możliwość wykonania natychmiastowej korony tymczasowej na tej samej wizycie</li>
					</ul>
				</section>
				<section aria-labelledby="implantology-treatment-stages">
					<h2 id="implantology-treatment-stages">Etapy leczenia implantologicznego</h2>
					<ol className="wide">
						<li>
							<h3>Diagnostyka i zaplanowanie leczenia</h3>
							<p>
								Na pierwszej wizycie konsultacyjnej lekarz przeprowadza z pacjentem wywiad ogólnomedyczny dotyczący:
							</p>
							<ul>
								<li>ogólnego stanu zdrowia</li>
								<li>przebytych i obecnych chorób ogólnoustrojowych</li>
								<li>przyjmowanych leków</li>
								<li>nałogów</li>
								<li>oczekiwań pacjenta</li>
							</ul>
							<p>
								Do <b>pełnej diagnozy</b> potrzebne jest zdjęcie panoramiczne (<b>pantomogram</b>), jak również
								tomografia komputerowa (<abbr title="Cone Beam Computed Tomography">CBCT</abbr>),
								na podstawie których oceniana jest:
							</p>
							<ul>
								<li>stan kości w miejscu planowanej implantacji</li>
								<li>stan zębów sąsiednich</li>
								<li>
									rozmiar i położenie sąsiednich struktur anatomicznych, które mogą mieć wpływ na przebieg
									leczenia, np. zasięg dna zatok szczękowych, położenie dna jam nosowych, przebieg
									kanału żuchwowego lub umiejscowienie otworu bródkowego
								</li>
							</ul>
						</li>
						<li>
							<h3>Etap chirurgiczny</h3>
							<p>
								Polega na <b>wprowadzeniu implantu do kości</b> w znieczuleniu miejscowym.
							</p>
							<p>
								Zabieg może być wykonany <b>jednoetapowo</b> i zakończony założeniem tzw. śruby gojącej w miejscu wprowadzonego implantu.
							</p>
							<p>
								W przypadku <b>implantacji dwuetapowej</b>, po założeniu implantu pokrywa się go szczelnie płatem dziąsłowym,
								a następnie po okresie osteointegracji (3-6 miesięcy) odsłania się implant i zakłada śrubę gojącą.
							</p>
							<p>
								Zaletą metody jednoetapowej jest wykonanie tylko jednego zabiegu chirurgicznego. <br />
								Przy metodzie dwuetapowej oprócz dwóch zabiegów chirurgicznych potrzebny jest czas ok. 2-3 tygodni
								niezbędny do wygojenia się dziąsła. Decyzję o wyborze metody leczenia podejmuje chirurg wykonujący zabieg.
							</p>
						</li>
						<li>
							<h3>Etap protetyczny</h3>
							<p>
								Polega na wykonaniu <b>ostatecznej odbudowy protetycznej na implancie</b> i trwa ok. 1-3 tygodni w
								zależności od rodzaju i rozległości uzupełnienia protetycznego.
							</p>
							<p>
								<b>W zależności od sytuacji</b> w jamie ustnej pacjenta, etap protetyczny <b>posiada wiele rozwiązań</b>:
							</p>
							<ul>
								<li><b>Pojedyńcza korona</b> w sytuacji braku jednego zęba</li>
								<li>
									<b>Most protetyczny</b> w sytuacji braku grupy zębów, może być oparty <b>wyłącznie</b> na
									implantach <b>lub</b> na zębach własnych pacjenta
								</li>
								<li>
									<b>Most teleskopowy</b>, który jest mostem ruchomym i może być oparty <b>jednocześnie</b> na
									implantach <b>i</b> na zębach własnych pacjenta
								</li>
								<li>
									<b>Proteza całkowita</b> przy całkowitym braku zębów, która jest osadzona na kilku filarach
									implantologicznych zapewniając jej całkowitą stabilność
								</li>
							</ul>
						</li>
					</ol>
				</section>

				<AdhesiveTechniqueModal hook={UseModal} />
			</article>
		</main>
	);
}

export default Implants;
