import ImportantInfo from '../../fragments/pages/ImportantInfo';
import Images from '../../../img/texts/prevention';
import ParallaxBaner from '../../fragments/ParallaxBanner'

function Prevention() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="prevention" text="Profilaktyka" />
			<article className="page-content">
				<section aria-labelledby="what-is-prevention">
					<h2 id="what-is-prevention">Czym jest profilaktyka</h2>
					<p>
						<dfn>Profilaktyka</dfn> to podstawowy dział stomatologii zajmujący się <b>zapobieganiem chorób jamy ustnej</b> oraz uświadamianiem,
						jak ważna w życiu codziennym jest <b>prawidłowa higiena</b>.
					</p>
					<p>
						Zabiegi profesjonalnej higieny jamy ustnej stały się <b>najczęściej wykonywanymi procedurami stomatologicznymi</b>.
					</p>
					<h3>W zakres profilaktyki wchodzą:</h3>
					<ul>
						<li>indywidualny <b>instruktaż higieny</b> jamy ustnej</li>
						<li>profesjonalny zabieg czyszczenia, obejmujący <b>scaling</b>, czyli usuwanie kamienia oraz czyszczenie z osadu</li>
						<li><b>fluoryzacja</b>, potocznie zwana lakierowaniem</li>
						<li><b>lakowanie</b></li>
						<li>wskazówki żywieniowe</li>
						<li>wizyty kontrolne</li>
					</ul>
					<h3>Celem profilaktyki jest</h3>
					<p>
						takie poprowadzenie pacjenta, aby również w domu samodzielnie stosował przekazane mu zalecenia
						instruktażu higieny jamy ustnej oraz używał indywidualnie dobranych dodatkowych środków do higieny, takich jak:
					</p>
					<ul>
						<li>nici dentystyczne</li>
						<li>szczoteczki międzyzębowe</li>
						<li>szczoteczki jednopęczkowe</li>
					</ul>
				</section>

				<section aria-labelledby="why-prevention-is-important">
					<h2 id="why-prevention-is-important">Dlaczego profilaktyka jest tak ważna</h2>
					<div className="text-img upright">
						<div className="photos">
							<div className="page-photo">
								<img src={Images.Scale} alt="" />
								<span>Kamień nazębny</span>
							</div>
							<div className="page-photo">
								<img src={Images.Plaque} alt="" />
								<span>Osad nazębny</span>
							</div>
						</div>
						<div>
							<p>
								Po każdym posiłku z resztek jedzenia i bakterii tworzy się na powierzchni zębów <dfn>płytka nazębna</dfn>,
								która występuje w postaci miękkiego, ściśle przylegającego, biało - żółtego nalotu.
							</p>
							<p>
								U pacjentów, którzy mają w składzie swojej śliny dużą zawartość soli mineralnych, po kilku
								dniach płytka nazębna ulega mineralizacji i tworzy się <b>kamień nazębny</b>. Czynnikiem zapobiegającym
								wytworzeniu się kamienia nazębnego jest <b>prawidłowo i systematycznie</b> przeprowadzana <b>higiena jamy ustnej</b> za
								pomocą odpowiednich środków do higieny.
							</p>
							<p>
								<dfn>Kamień nazębny</dfn> powstaje więc na skutek nieprawidłowego czyszczenia
								zębów i nie da się go usunąć przy użyciu przyrządów do podstawowej higieny jamy ustnej. Można się go
								pozbyć już tylko w gabinecie stomatologicznym za pomocą <b>scalera</b>, działającego na zasadzie ultradżwięków.
							</p>
							<p>
								<a href="#services" className="text-link"><b>Scaling</b></a> powinien być
								wykonywany <b>jak najwcześniej po pojawieniu się kamienia</b>, a częstość jego wykonywania
								zależy od osobniczych predyspozycji pacjenta.
							</p>
							<p>
								Często kamień mylony jest z <b>osadem nazębnym</b>, który jest przebarwieniem zębów powstającym na skutek spożywania,
								zawierających silne <b>substancje barwiące</b>, napojów i jedzenia, np. kawy, herbaty, potraw z curry itp.
								oraz <b>palenia papierosów</b>. Usuwa się go razem z kamieniem podczas scalingu.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Codzienne stosowanie pasty z fluorem, koniecznych dodatkowych środków do higieny oraz regularne
						usuwanie kamienia i osadu, warunkuje ochronę przed rozwojem próchnicy i chorób przyzębia.
					</ImportantInfo>

				</section>
				<section aria-labelledby="preventive-treatments" id="services">

					<h2 id="preventive-treatments">Zabiegi profilaktyczne</h2>
					<div className="text-img upright">

						<div className="photos">
							<div className="page-photo">
								<img src={Images.Scaling} alt="Próchnica" />
								<span>Scaling</span>
							</div>
						</div>

						<h3>Scaling</h3>
						<p>
							Zabieg polegający na <b>usunięciu kamienia nazębnego</b> za pomocą ultradźwięków.
						</p>
						<p>
							<b>Jest bezbolesny</b>, trwa od 15 do 50 minut w zależności od ilości złogów i kończy się polerowaniem zębów
							specjalną pastą. Zabieg powinien być wykonywany od 2 do 4 razy w roku, w zależności od indywidualnych potrzeb pacjenta.
							Po zabiegu <b>może</b> pojawić się <b>nadwrażliwość zębów</b> trwająca do 3-4 dni. W celu jej zmniejszenia, zaleca się
							zabezpieczenie zębów fluorem, potocznie nazywane lakierowaniem.
						</p>
					</div>


					<h3>Fluoryzacja (lakierowanie)</h3>
					<p>
						Jest to zabieg <b>zapobiegający powstawaniu próchnicy</b>. Fluor, oprócz powodowania <b>wzrostu odporności zębów</b> na
						działanie próchnicotwórcze bakterii, powoduje <b>zmniejszenie nadwrażliwości zębów</b> poprzez
						remineralizację szkliwa.
					</p>
					<p>
						Zabieg ten polegaja na aplikacji preparatów fluoru bezpośrednio na powierzchnię zęba lub zastosowanie
						przeznaczonych do tego łyżek i żelu. Stosowany w gabinecie fluor jest w wielokrotnie wyższym stężeniu niż preparaty
						ogólnodostępne.
					</p>
					<div className="text-img downright">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={Images.Sealing} alt="Próchnica" />
									<span>Lakowanie</span>
								</div>
							</div>

							<h3>Lakowanie</h3>

							<p>
								Jest zabiegiem wykonywanym <b>u dzieci</b> w pełni wykształconych zębach stałych, w których anatomiczny kształt
								bruzd i zagłębień uniemożliwia ich skuteczne oczyszczanie. Płytka bakteryjna zalegająca w takich miejscach powoduje
								duże ryzyko powstania próchnicy zęba.
							</p>
							<p>
								Polega ono na <b>blokadzie zagłębień anatomicznych</b> specjalnym lakiem, który uszczelnia je mechanicznie oraz
								uwalnia fluor. Uszczelnione bruzdy <b>przestają być potencjalnym miejscem rozwoju próchnicy</b>.
								Warunkiem nieinwazyjnego przeprowadzenia zabiegu jest <b>całkowity brak plam próchniczych i ubytków w danym zębie</b>.
								W przypadku wystąpienia próchnicy konieczne jest jej usunięcie, przed przystąpieniem do lakowania.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Lakowanie jest istotnym zabiegiem w profilaktyce próchnicy, ponieważ <b>zabezpiecza zęby</b> przed powstawaniem ubytków i
						gwarantuje ich <b>długie przetrwanie</b> w jamie ustnej.
					</ImportantInfo>
				</section>
			</article>
		</main >
	);
}

export default Prevention;
