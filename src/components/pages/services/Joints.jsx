import ImportantInfo from '../../fragments/pages/ImportantInfo';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import BruxismModal from '../../fragments/modals/BruxismModal';
import useModal from '../../fragments/customHooks/useModal';
import ImgLoading from '../../fragments/ImgLoading';

function Joints() {
	const UseModal = useModal();

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner
				id='joints'
				text='Leczenie Stawów Skroniowo-Żuchwowych'
			/>
			<article className='page-content'>
				<section aria-labelledby='joints-treatment'>
					<p>
						<b>
							Nieprawidłowe funkcjonowanie stawów
							skroniowo-żuchwowych
						</b>{' '}
						stało się w dzisiejszych czasach coraz powszechniejszą
						przyczyną <b>dolegliwości w obrębie stawów</b> i zjawisk
						patologicznych z nim związanych.
					</p>
					<h3>Objawy</h3>
					<ul>
						<li>
							trzaski, przeskakiwania lub klikania oraz zbaczanie
							żuchwy podczas otwierania ust
						</li>
						<li>uporczywe bóle głowy</li>
						<li>bóle zębów niewyjaśnionego pochodzenia</li>
						<li>ból podczas żucia twardych pokarmów</li>
						<li>ból w obrębie twarzy</li>
						<li>bóle karku</li>
						<li>szum w uszach</li>
						<li>ograniczenie otwierania ust</li>
						<li>
							wzrost napięcia mięśni, odczuwalny np. rano,
							prowadzący do przerostu mięśni żwaczy
						</li>
						<li>
							<span
								className='text-link'
								onClick={() => UseModal.openModal('Bruksizm')}
							>
								bruksizm
							</span>
						</li>
					</ul>

					<h3>Przyczyny</h3>
					<p>
						<b>Przyczyny</b> prowadzące do{' '}
						<b>zaburzeń w funkcjonowaniu</b> układu ruchu narządu
						żucia:
					</p>
					<ul>
						<li>
							zaburzenia zębowe prowadzące do nieprawidłowych
							kontaktów zwarciowych i powstania węzłów urazowych z
							powodu:
						</li>
						<ul>
							<li>
								<b>nieprawidłowo wykonanych</b> wypełnień lub
								uzupełnień protetycznych
							</li>
							<li>częściowej utraty uzębienia</li>
							<li>przemieszczenia zębów</li>
						</ul>
						<li>
							zaburzenia związane z nieprawidłowościami elementów{' '}
							<b>anatomicznych</b> stawów, np. krążków stawowych
						</li>
						<li>
							<b>mechaniczne urazy</b> stawów, złamania kości
							szczęki lub żuchwy
						</li>
						<li>
							długotrwałe nawykowe <b>żucie jedną stroną</b> lub
							uporczywe żucie gumy do żucia
						</li>
						<li>
							czynniki psychiczne lub <b>stres</b>, zwiększające
							intensywność{' '}
							<b>nawyków patologicznych - parafunkcji</b>, takich
							jak:
						</li>
						<ul>
							<li>zaciskanie zębów</li>
							<li>zgrzytanie</li>
							<li>obgryzanie paznokci</li>
							<li>
								uporczywe nagryzanie śluzówki policzków lub warg
							</li>
							<li>nagryzanie przedmiotów obcych</li>
						</ul>
					</ul>

					<h3>Leczenie</h3>
					<p>
						<b>Leczenie dysfunkcji</b> stawów skroniowo-żuchwowych:
					</p>
					<ul>
						<li>
							<b>wywiad i badanie</b> stawów skroniowo-żuchwowych
							i mięśni
						</li>
						<li>
							<b>pobranie wycisków</b> i wykonanie modeli
							orientacyjnych do analizy relacji szczęki i żuchwy
						</li>
						<li>
							<b>wykonanie</b> różnego rodzaju silikonowych{' '}
							<b>szyn relaksacyjnych</b> zmieniających pamięć
							mięśniową
						</li>
						<li>
							<b>ćwiczenia</b> mięśniowe narządu żucia
						</li>
						<li>
							<b>korekta warunków zwarciowych</b> i likwidacja
							węzłów urazowych
						</li>
						<li>
							w razie potrzeby - <b>leczenie farmakologiczne</b>
						</li>
					</ul>
					<ImportantInfo>
						Szybkie rozpoznanie i leczenie nieprawidłowości w
						funkcjonowaniu stawów skroniowo-żuchwowych skróci czas
						leczenia i{' '}
						<b>zapobiegnie utrwaleniu się złych nawyków</b> i
						powolnemu niszczeniu całego narządu żucia.
					</ImportantInfo>
				</section>
				<section aria-labelledby='relaxation-rails'>
					<h2 id='what-are-crown-inserts'>Szyna Relaksacyjna</h2>
					<div className='text-img downright'>
						<div>
							<div className='photos'>
								<div className='page-photo'>
									<ImgLoading
										src={
											'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/joints/relax_rail.jpeg'
										}
										alt='Szyna relaksacyjna'
									/>
									<span>Szyna relaksacyjna</span>
								</div>
							</div>
							<p>
								<b>Szyna relaksacyjna</b> jest przezroczystą
								nakładką na zęby, indywidualnie dopasowaną do
								zębów pacjenta. W zależności od potrzeb wykonuje
								się ją z różnej twardości{' '}
								<b>masy silikonowej</b>, wykazującej wysoką
								odporność na uszkodzenia. Szyna jest wykonana w
								taki sposób, żeby{' '}
								<b>nie powodowała żadnych uszkodzeń dziąsła.</b>
							</p>
							<p>
								Najczęściej szynę relaksacyjną wykonuje się
								pacjentom z{' '}
								<span
									className='text-link'
									onClick={() =>
										UseModal.openModal('Bruksizm')
									}
								>
									bruksizmem
								</span>{' '}
								lub <b>nadmiernym zaciskaniem zębów</b>.
								Zalecana jest do noszenia w ciągu dnia, a w{' '}
								<b>szczególności w nocy</b>, kiedy występujące
								parafunkcje uniemożliwiają sen lub są przyczyną
								bezsenności.
							</p>
							<p>
								Jej <b>czas noszenia</b> jest zależny od stopnia
								zaawansowania zaburzeń stawów
								skroniowo-żuchwowych lub siły występujących
								parafunkcji.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Szyny relaksacyjne oprócz funkcji leczniczej{' '}
						<b>chronią zęby</b> przed uszkodzeniami.
					</ImportantInfo>
				</section>
				<BruxismModal hook={UseModal} />
			</article>
		</main>
	);
}

export default Joints;
