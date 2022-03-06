import '../../../styles/main.scss';
import CarPhoto from '../../../img/samochut.jpg';
import ImportantInfo from '../../fragments/pages/ImportantInfo';

function OnlayInlay() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="onlay-inlay">
				<div className="banner-title">
					<h1>Onley'e, Inley'e, Overlay'e, Endokorony</h1>
				</div>
			</div>
			<article className="page-content">
				<section className="page-content-text">
					<h2>Czym są wkłady koronowe?</h2>
					<p>
						<b>Onlay'e,  Inlay'e,  Overlay'e, Endokorony</b> to inaczej <dfn>Wkłady Koronowe</dfn> -
						są to wypełnienia zębów o bardzo wysokiej jakości, przyklejane do
						zęba specjalną techniką adhezyjną najnowszej generacji.
						Są to jedne z <b>najbardziej luksusowych produktów stomatologicznych</b> oferowanych pacjentom.
					</p>
					<p>
						Najważniejszym etapem w wykonaniu wkładów koronowych jest <b>oczyszczenie zęba z próchnicy</b> oraz
						innych wypełnień i <b>nadanie mu odpowiedniego kształtu</b> w sposób
						spełniający wymagania mechaniczne. Etap ten wykonuje się w znieczuleniu
						miejscowym w przypadku zębów żywych lub bez znieczulenia w zębach martwych.<br />
						Następnie pobierane są <b>wyciski</b> obu łuków zębowych i wysyłane do <b>laboratorium protetycznego</b>.
						Ząb zabezpieczany jest wypełnieniem tymczasowym. <br />
						Na kolejnej wizycie wkład koronowy jest <b>cementowany</b> do zęba specjalną techniką adhezyjną.
					</p>
					<ImportantInfo>
						Wkłady koronowe dotyczą tylko zębów bocznych, zarówno żywych, jak i martwych.
					</ImportantInfo>

					<h3>Rodzaje wkładów koronowych</h3>
					<ul>
						<li><dfn>Inlay</dfn> - wkład koronowy wykonywany przy zachowaniu wszystkich ścianek zęba</li>
						<li><dfn>Onlay</dfn> - wkład koronowy odtwarzający całą powierzchnię żującą i guzki zęba</li>
						<li><dfn>Overlay</dfn> (inaczej nakład) - ma poszerzony zasięg o ściany boczne zęba</li>
						<li><dfn>Endokorona</dfn> - dotyczy zębów martwych. Warunkiem jej wykonania jest odpowiednia ilość
							tkanek zęba stanowiąca odpowiednie podparcie.
							Jeśli w wyniku leczenia kanałowego doszło do znacznego zniszczenia tkanek,
							musi zostać zastosowana metoda odbudowy protetycznej za pomocą wkładu koronowo-korzeniowego i korony porcelanowej.</li>
					</ul>
					<div className="page-gallery">
						<div className="page-photo">
							<img src={CarPhoto} alt="" />
							<span>Inlay</span>
						</div>
						<div className="page-photo">
							<img src={CarPhoto} alt="" />
							<span>Onlay</span>
						</div>
						<div className="page-photo">
							<img src={CarPhoto} alt="" />
							<span>Overlay</span>
						</div>
					</div>

					<h3>WSKAZANIA do wykonania wkładów koronowych:</h3>
					<ul>
						<li>uzupełnienie brakujących części zęba</li>
						<li>zastąpienie bardzo rozległych wypełnień kompozytowych</li>
						<li>przy parafunkcjach typu bruksizm, zgrzytanie zębami</li>
						<li>w sytuacji konieczności rekonstrukcji zwarcia</li>
					</ul>
				</section>

				<section className="page-content-text">
					<h2>Zalety wkładów koronowych</h2>
					<p>
						Tego typu uzupełnienia są bardziej czasochłonne niż tradycyjne,
						ale rozwiązanie to warte jest poświęconego czasu i nakładów finansowych.
						Jakość wkładów koronowych znacznie przewyższa standardowe wypełnienia kompozytowe,
						powszechnie stosowane u pacjentów, ponieważ mają one wiele zalet:
					</p>
					<ul>
						<li>Wzmacniają ząb!</li>
						<li>Są rozwiązaniem długoczasowym</li>
						<li>Znacząco podnoszą komfort użytkowania wypełnień</li>
						<li>Zapobiegają próchnicy wtórnej, prowadzącej do dalszego zniszczenia zęba</li>
						<li>W sposób pełnopowierzchniowy odtwarzają powierzchnię żującą zęba</li>
						<li>Precyzyjnie odtwarzają boczne powierzchnie styczne, dzięki czemu jedzenie nie dostaje się między zęby</li>
						<li>Zapobiegają wyłamywaniu się ścianek lub nawet złamaniom zęba</li>
						<li>Są wykonane z materiałów o większej trwałości (porcelana, złoto lub kompozyt utwardzany na gorąco)</li>
						<li>Zabezpieczają wysokość zwarcia i wpływają na cały układ żucia</li>
					</ul>
				</section>

				<section className="page-content-text">
					<h2>Dlaczego wkłady koronowe?</h2>
					<p>
						Ze względu na fakt, że należą już do uzupełnień protetycznych i są
						wykonywane przez technika w laboratorium protetycznym, wkłady koronowe
						odtwarzają w prawidłowy sposób powierzchnię żującą zęba. Ma to olbrzymie
						znaczenie nie tylko dla zębów, w których się znajdują, ale też dla całego narządu żucia.
					</p>

					<div className="text-img">
						<div>
							<div className="page-photo down-right">
								<img src={CarPhoto} alt="" />
								<span>"Starczy wygląd"</span>
							</div>
							<p>
								W sytuacji kiedy powierzchnie żujące są wykonane z miękkich materiałów,
								jakimi są standardowe kompozyty, nadmierne ścieranie się takiego uzupełnienia
								prowadzi do przeciążania wszystkich zębów. Powoduje to szybsze niż fizjologiczne,
								ścieranie się brzegów siecznych zębów przednich oraz guzków i powierzchni żujących
								zębów trzonowych i przedtrzonowych.
							</p>
							<p> To z kolei znacznie przyspiesza obniżanie
								wysokości zwarcia i wizualne skrócenie dolnego odcinka twarzy pomiędzy nosem i brodą.
								Pojawia się tzw. "starczy wygląd", charakteryzujący się opadaniem kącików ust,
								pogłębieniem bruzd nosowo-wargowych i wywinięciem dolnej wargi.
								Doskonale znany jest wygląd pacjentów z całkowitym bezzębiem,
								którzy są skrajnym przykładem takiego objawu.
							</p>

						</div>
					</div>
					<ImportantInfo>
						Uzupełnienie brakujących tkanek zęba wykonanych odpowiednio wcześnie oraz z materiałów
						o twardości i ścieralności, zbliżonej do naturalnego szkliwa, skutecznie zapobiegnie tym objawom.
					</ImportantInfo>
				</section>
			</article>
		</main>
	);
}

export default OnlayInlay;
