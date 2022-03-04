import '../../../styles/main.scss';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import CarPhoto from '../../../img/samochut.jpg';

function Prevention() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="prevention">
				<div className="banner-title">
					<h1>Profilaktyka</h1>
				</div>
			</div>
			<article className="page-content">
				<section className="page-content-text">
					<h2>Czym jest profilaktyka</h2>
					<p>
						Profilaktyka to podstawowy dział stomatologii zajmujący się <b>zapobieganiem chorób jamy ustnej</b> oraz uświadamianiem,
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
						<li>zabieg ICON</li>
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

				<section className="page-content-text">
					<h2>Dlaczego profilaktyka jest tak ważna</h2>
					<div className="text-img">
						<div>
							<div className="photos">
								<div className="page-photo">
									<img src={CarPhoto} alt="" />
									<span>Płytka nazębna</span>
								</div>
								<div className="page-photo">
									<img src={CarPhoto} alt="" />
									<span>Osad nazębny</span>
								</div>
							</div>
							<p>
								Pozostająca na zębach fizjologiczna <b>płytka nazębna</b>, tworząca się po każdym posiłku z resztek jedzenia i bakterii,
								występuje w postaci miękkiego, ściśle przylegającego, biało - żółtego nalotu. Po kilku dniach ulega mineralizacji
								solami mineralnymi ze śliny i tworzy <b>kamień nazębny</b>.
							</p>
							<p>
								Kamień powstaje więc na skutek nieprawidłowego czyszczenia zębów i nie da się go usunąć przy użyciu przyrządów do
								podstawowej higieny jamy ustnej. Pozbyć się go można tylko w gabinecie stomatologicznym za pomocą <b>scalera</b>,
								działającego na zasadzie ultradżwięków.
							</p>
							<p>
								<b>Płytka nazębna</b> jest podstawowym czynnikiem wywołującym powstanie próchnicy, a kamień - chorób przyzębia,
								dlatego <a href="#services" className="text-link"><b>scaling</b></a> powinien być wykonywany <b>jak najwcześniej</b> po
								pojawieniu się kamienia. Częstość wykonywania tego zabiegu zależy więc od osobniczych predyspozycji pacjenta do jego odkładania.
							</p>
							<p>
								Często kamień mylony jest z <b>osadem nazębnym</b>, który jest przebarwieniem zębów powstającym na skutek spożywania,
								zawierających silne substancje barwiące, napojów i pokarmów, np. kawy, herbaty, potraw z curry itp. oraz palenia papierosów.
								Usuwa się go razem z kamieniem podczas scalingu.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Codzienne stosowanie pasty z fluorem, koniecznych dodatkowych środków do higieny oraz regularne
						usuwanie kamienia i osadu, warunkuje ochronę przed rozwojem próchnicy i chorób przyzębia.
					</ImportantInfo>

				</section>
				<section className="page-content-text" id="services">

					<h2>Zabiegi profilaktyczne</h2>

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

					<h3>Fluoryzacja (lakierowanie)</h3>
					<p>
						Jest to zabieg <b>zapobiegający powstawaniu próchnicy</b>. Fluor, oprócz <b>zmniejszenia nadwrażliwości zębów</b> poprzez
						remineralizację szkliwa, powoduje <b>wzrost odporności zębów</b> na działanie próchnicotwórcze bakterii.
					</p>
					<p>
						Zabieg ten polegaja na aplikacji preparatów fluoru bezpośrednio na powierzchnię zęba lub zastosowanie
						przeznaczonych do tego łyżek i żelu. Stosowany w gabinecie fluor jest w wielokrotnie wyższym stężeniu niż preparaty
						ogólnodostępne.
					</p>

					<h3>Lakowanie</h3>
					<p>
						Jest zabiegiem wykonywanym <b>u dzieci</b> w pełni wykształconych zębach stałych, w których anatomiczny kształt
						bruzd i zagłębień uniemożliwia ich skuteczne oczyszczanie. Płytka bakteryjna zalegająca w takim miejscu powoduje
						duże ryzyko powstania próchnicy zęba.
					</p>
					<p>
						Polega ono na <b>blokadzie zagłębień anatomicznych</b> specjalnym lakiem, który uszczelnia je mechanicznie oraz
						uwalnia fluor. Uszczelnione bruzdy <b>przestają być potencjalnym miejscem rozwoju próchnicy</b>.
						Warunkiem nieinwazyjnego przeprowadzenia zabiegu jest <b>całkowity brak plam próchniczych i ubytków w danym zębie</b>.
						W przypadku wystąpienia próchnicy konieczne jest jej usunięcie, przed przystąpieniem do lakowania.
					</p>
					<ImportantInfo>
						Jest to istotny zabieg w profilaktyce próchnicy, ponieważ zabezpiecza zęby przed powstawaniem ubytków i
						gwarantuje ich długie przetrwanie w jamie ustnej.
					</ImportantInfo>

					<h3>Zabieg ICON</h3>
					<p>
						Nazwa zabiegu pochodzi od nazwy fabrycznej stosowanego preparatu - polega na <b>likwidacji białych plam</b> na powierzchni
						szkliwa, które są <b>odwapnieniami</b> pojawiającymi się po leczeniu ortodontycznym lub antybiotykoterapii.
						Mogą również występować jako wrodzone defekty szkliwa.
					</p>
					<p>
						Przeprowadza się go stosując <b>płynną żywicę</b>, która wielokrotnie wtarta w powierzchnię szkliwa powoduje zrekonstruowanie
						uszkodzonej powierzchni zęba. Jest to <b>bardzo delikatna metoda leczenia</b> wczesnego stadium próchnicy oraz defektów szkliwa,
						pozwalająca na <b>przywrócenie naturalnego koloru i wyglądu zęba</b>.
					</p>
				</section>
			</article>
		</main >
	);
}

export default Prevention;
