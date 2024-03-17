import { Link } from 'react-router-dom';
import ImportantInfo from '../../fragments/pages/ImportantInfo';
import ParallaxBaner from '../../fragments/ParallaxBanner';
import AdhesiveTechniqueModal from '../../fragments/modals/AdhesiveTechniqueModal';
import PolymerizationModal from '../../fragments/modals/PolymerizationModal';
import useModal from '../../fragments/customHooks/useModal';
import ImgLoading from '../../fragments/ImgLoading';

function ConservativeDentistry() {
	const UseModal = useModal();

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner
				id='conservative-dentistry'
				text='Stomatoligia Zachowawcza'
			/>
			<article className='page-content'>
				<section aria-labelledby='what-is-conservative-dentistry'>
					<h2 id='what-is-conservative-dentistry'>
						Czym jest Stomatologia Zachowawcza?
					</h2>
					<p>
						<b>Stomatologia zachowawcza</b> zajmuje się wykrywaniem
						i leczeniem najbardziej rozpowszechnionej choroby zębów,
						czyli <b>próchnicy</b> wraz z odtwarzaniem utraconych
						tkanek wskutek tej choroby oraz urazów.
					</p>
				</section>
				<section aria-labelledby='dental-caries'>
					<h2 id='dental-caries'>Próchnica</h2>
					<div className='text-img downright'>
						<div>
							<div className='photos'>
								<div className='page-photo'>
									<ImgLoading
										src={
											'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/conservatives/caries.jpeg'
										}
										alt='Próchnica'
									/>
									<span>Próchnica</span>
								</div>
							</div>
							<p>
								Przyczyną powstania próchnicy jest{' '}
								<b>płytka nazębna</b>, tworząca się po każdym
								posiłku z resztek jedzenia i bakterii, głównie z
								grupy paciorkowców. Rozwój próchnicy zaczyna się
								bardzo niewinnie od białych plam możliwych do
								wykrycia tylko w gabinecie stomatologicznym.
								Nieleczone, przekształcają się w poważne{' '}
								<b>ubytki</b> obejmujące kolejne tkanki zęba, z
								czasem docierające do jego centrum -{' '}
								<b>miazgi</b>.
							</p>
							<p>
								Zniszczona przez próchnicę struktura zęba{' '}
								<b>nie regeneruje się</b>, jednak jej leczenie
								może zatrzymać rozwój choroby. Próchnica daje o
								sobie znać dopiero wtedy, gdy znajduje się w
								bliskim sąsiedztwie miazgi. Tak późne wykrycie
								ubytków grozi jednak <b>obumarciem zęba</b> i{' '}
								<b>koniecznością leczenia kanałowego</b>.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Aby uniknąć rozwoju próchnicy wskazane są{' '}
						<Link
							to={'/oferta/wizyta-diagnostyczna'}
							className='text-link'
						>
							<b>wizyty kontrolne</b>
						</Link>
						, które powinny odbywać się co pół roku. Mają one na
						celu wykrycie próchnicy w bardzo wczesnym stadium oraz
						uniknięcie leczenia kanałowego.
					</ImportantInfo>
				</section>
				<section aria-labelledby='dental-caries-treatment'>
					<h2 id='dental-caries-treatment'>Leczenie próchnicy</h2>
					<div className='text-img upright'>
						<div className='photos'>
							<div className='page-photo'>
								<ImgLoading
									src={
										'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/conservatives/treatment.jpeg'
									}
									alt='Leczenie próchnicy'
								/>
								<span>Leczenie próchnicy</span>
							</div>
						</div>
						<p>
							Zabieg polega na{' '}
							<b>usunięciu zniszczonych tkanek</b> i zastąpieniu
							ich specjalnie do tego celu przeznaczonym
							wypełnieniem, potocznie zwanym <b>plombą</b>.
						</p>
						<p>
							Powszechnie stosowanym materiałem do wypełnień jest{' '}
							<b>kompozyt</b>, który występuje w postaci
							miękkiego, plastycznego materiału kształtowanego
							przez lekarza w zębie. Aby powstało twarde, odporne
							na siły gryzienia wypełnienie, potrzebny jest
							czynnik inicjujący - specjalny rodzaj światła
							ultrafioletowego, który wywołuje proces{' '}
							<dfn>
								<span
									className='text-link'
									onClick={() =>
										UseModal.openModal('Polimeryzacja')
									}
								>
									polimeryzacji
								</span>
							</dfn>
							, czyli twardnienia materiału kompozytowego. Aby
							wypełnienie ściśle i szczelnie przylegało do zęba,
							lekarz w specjalny sposób przygotowuje tkanki zęba
							używając{' '}
							<b>
								<span
									className='text-link'
									onClick={() =>
										UseModal.openModal('Technika adhezyjna')
									}
								>
									adhezyjnych
								</span>{' '}
								systemów łączących
							</b>
							.
						</p>
					</div>
					<h3>Współczesne materiały do wypełnień ubytków cechuje:</h3>
					<ul>
						<li>
							<b>duża wytrzymałość</b>
						</li>
						<li>
							trwałość na ścieranie i zgniatanie, dzięki czemu
							wytrzymałość i elastyczność uzyskanych wypełnień
							jest bardzo <b>zbliżona do wytrzymałości zębów</b>{' '}
							własnych pacjenta
						</li>
						<li>możliwość dokładnego odtworzenia funkcji zęba</li>
						<li>
							możliwość odtworzenia kształtu i koloru utraconych
							tkanek, dzięki czemu wypełnienie jest{' '}
							<b>praktycznie niezauważalne</b>
						</li>
					</ul>
					<h3>Leczenie Biologiczne</h3>
					<p>
						Czasami zniszczenie tkanek zęba sięga tak głęboko, że
						założenie wypełnienia jest niemożliwe. Stosuje się wtedy
						tzw. <dfn>leczenie biologiczne</dfn>, polegające na
						założeniu materiału regenerującego chorą miazgę. Po
						upływie 3-6 miesięcy można już całkowicie oczyścić chore
						tkanki i założyć wypełnienie.
					</p>
				</section>

				<AdhesiveTechniqueModal hook={UseModal} />
				<PolymerizationModal hook={UseModal} />
			</article>
		</main>
	);
}

export default ConservativeDentistry;
