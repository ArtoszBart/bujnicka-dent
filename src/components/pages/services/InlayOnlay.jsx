import ImportantInfo from '../../fragments/pages/ImportantInfo';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import useModal from '../../fragments/customHooks/useModal';
import AdhesiveTechniqueModal from '../../fragments/modals/AdhesiveTechniqueModal';
import BruxismModal from '../../fragments/modals/BruxismModal';
import ImgLoading from '../../fragments/ImgLoading';

function InlayOnlay() {
	const UseModal = useModal();

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner
				id='inlay-onlay'
				text="Inlay'e, Onlay'e, Overlay'e, Endokorony"
			/>
			<article className='page-content'>
				<section aria-labelledby='what-are-crown-inserts'>
					<h2 id='what-are-crown-inserts'>
						Czym są wkłady koronowe?
					</h2>
					<p>
						<b>Inley'e, Onley'e, Overlay'e, Endokorony</b> to
						inaczej <dfn>Wkłady Koronowe</dfn> - są to wypełnienia
						zębów o bardzo wysokiej jakości, przyklejane do zęba
						specjalną{' '}
						<span
							className='text-link'
							onClick={() =>
								UseModal.openModal('Technika adhezyjna')
							}
						>
							techniką adhezyjną
						</span>{' '}
						najnowszej generacji. Są to jedne z{' '}
						<b>
							najbardziej luksusowych produktów stomatologicznych
						</b>{' '}
						oferowanych pacjentom.
					</p>
					<p>
						Najważniejszym etapem w wykonaniu wkładów koronowych
						jest <b>oczyszczenie zęba z próchnicy</b> oraz innych
						wypełnień i <b>nadanie mu odpowiedniego kształtu</b> w
						sposób spełniający wymagania mechaniczne. Etap ten
						wykonuje się w znieczuleniu miejscowym w przypadku zębów
						żywych lub bez znieczulenia w zębach martwych.
						<br />
						Następnie pobierane są <b>wyciski</b> obu łuków zębowych
						i wysyłane do <b>laboratorium protetycznego</b>. Ząb
						zabezpieczany jest wypełnieniem tymczasowym. <br />
						Na kolejnej wizycie wkład koronowy jest{' '}
						<b>cementowany</b> do zęba{' '}
						<span
							className='text-link'
							onClick={() =>
								UseModal.openModal('Technika adhezyjna')
							}
						>
							techniką adhezyjną
						</span>
						.
					</p>
					<ImportantInfo>
						Wkłady koronowe dotyczą tylko zębów bocznych, zarówno
						żywych, jak i martwych.
					</ImportantInfo>

					<h3>Rodzaje wkładów koronowych</h3>
					<ul>
						<li>
							<dfn>Inlay</dfn> - wkład koronowy wykonywany przy
							zachowaniu wszystkich ścianek zęba
						</li>
						<li>
							<dfn>Onlay</dfn> - wkład koronowy odtwarzający część
							powierzchni żującej i ściankę zęba
						</li>
						<li>
							<dfn>Overlay</dfn> - ma poszerzony zasięg o całą
							powierzchnię żującą oraz ściany boczne zęba
						</li>
						<li>
							<dfn>Endokorona</dfn> - dotyczy zębów martwych.
							Warunkiem jej wykonania jest odpowiednia ilość
							tkanek zęba stanowiąca odpowiednie podparcie. Jeśli
							w wyniku leczenia kanałowego doszło do znacznego
							zniszczenia zęba, musi zostać zastosowana metoda
							odbudowy protetycznej za pomocą wkładu
							koronowo-korzeniowego i korony porcelanowej.
						</li>
					</ul>
					<div className='text-img horizontal'>
						<div className='photos'>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/inlay-onlay/inlay.jpeg'
									}
									alt='Inlay'
								/>
								<span>Inlay</span>
							</div>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/inlay-onlay/onlay.jpeg'
									}
									alt='Onlay'
								/>
								<span>Onlay</span>
							</div>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/inlay-onlay/overlay.jpeg'
									}
									alt='Overlay'
								/>
								<span>Overlay</span>
							</div>
						</div>
					</div>

					<h3>WSKAZANIA do wykonania wkładów koronowych:</h3>
					<ul>
						<li>uzupełnienie brakujących części zęba</li>
						<li>
							zastąpienie bardzo rozległych wypełnień
							kompozytowych
						</li>
						<li>
							przy parafunkcjach typu{' '}
							<span
								className='text-link'
								onClick={() => UseModal.openModal('Bruksizm')}
							>
								bruksizm
							</span>
							, zgrzytanie zębami
						</li>
						<li>w sytuacji konieczności rekonstrukcji zwarcia</li>
					</ul>
				</section>

				<section aria-labelledby='crown-insert-advantages'>
					<h2 id='crown-insert-advantages'>
						Zalety wkładów koronowych
					</h2>
					<p>
						Tego typu uzupełnienia są bardziej czasochłonne niż
						tradycyjne, ale rozwiązanie to warte jest poświęconego
						czasu i nakładów finansowych. Jakość wkładów koronowych
						znacznie przewyższa standardowe wypełnienia kompozytowe,
						powszechnie stosowane u pacjentów, ponieważ mają one
						wiele zalet:
					</p>
					<ul>
						<li>Wzmacniają ząb!</li>
						<li>Są rozwiązaniem długoczasowym</li>
						<li>Znacząco podnoszą komfort użytkowania wypełnień</li>
						<li>
							Zapobiegają próchnicy wtórnej, prowadzącej do
							dalszego zniszczenia zęba
						</li>
						<li>
							W sposób pełnopowierzchniowy odtwarzają powierzchnię
							żującą zęba
						</li>
						<li>
							Precyzyjnie odtwarzają boczne powierzchnie styczne,
							dzięki czemu jedzenie nie dostaje się między zęby
						</li>
						<li>
							Zapobiegają wyłamywaniu się ścianek lub nawet
							złamaniom zęba
						</li>
						<li>
							Są wykonane z materiałów o większej trwałości
							(porcelana, złoto lub kompozyt utwardzany na gorąco)
						</li>
						<li>
							Zabezpieczają wysokość zwarcia i wpływają na cały
							układ żucia
						</li>
					</ul>
				</section>

				<section aria-labelledby='why-crown-inserts'>
					<h2 id='why-crown-inserts'>Dlaczego wkłady koronowe?</h2>

					<div className='text-img downright'>
						<div>
							<div className='photos'>
								<div className='page-photo'>
									<ImgLoading
										src={
											'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/inlay-onlay/old_look.jpeg'
										}
										alt='Starczy wygląd'
									/>
									<span>"Starczy wygląd"</span>
								</div>
							</div>
							<p>
								Ze względu na fakt, że należą już do uzupełnień
								protetycznych i są wykonywane przez technika w
								laboratorium protetycznym, wkłady koronowe
								odtwarzają w prawidłowy sposób powierzchnię
								żującą zęba. Ma to olbrzymie znaczenie nie tylko
								dla zębów, w których się znajdują, ale też dla
								całego narządu żucia.
							</p>
							<p>
								W sytuacji kiedy powierzchnie żujące są wykonane
								z miękkich materiałów, jakimi są standardowe
								kompozyty, nadmierne ścieranie się takiego
								uzupełnienia prowadzi do przeciążania wszystkich
								zębów. Powoduje to szybsze niż fizjologiczne,
								ścieranie się brzegów siecznych zębów przednich
								oraz guzków i powierzchni żujących zębów
								trzonowych i przedtrzonowych.
							</p>
							<p>
								{' '}
								To z kolei znacznie przyspiesza obniżanie
								wysokości zwarcia i wizualne skrócenie dolnego
								odcinka twarzy pomiędzy nosem i brodą. Pojawia
								się tzw. "starczy wygląd", charakteryzujący się
								opadaniem kącików ust, pogłębieniem bruzd
								nosowo-wargowych i wywinięciem dolnej wargi.
								Doskonale znany jest wygląd pacjentów z
								całkowitym bezzębiem, którzy są skrajnym
								przykładem takiego objawu.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Uzupełnienie brakujących tkanek zęba wykonanych
						odpowiednio wcześnie oraz z materiałów o twardości i
						ścieralności, zbliżonej do naturalnego szkliwa,
						skutecznie zapobiega objawom "starczego wyglądu".
					</ImportantInfo>
				</section>

				<AdhesiveTechniqueModal hook={UseModal} />
				<BruxismModal hook={UseModal} />
			</article>
		</main>
	);
}

export default InlayOnlay;
