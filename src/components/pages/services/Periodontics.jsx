import ImportantInfo from '../../fragments/pages/ImportantInfo';
import Images from '../../../img/texts/periodontics';
import { Link } from 'react-router-dom';
import ParallaxBaner from '../../fragments/ParallaxBanner'
import ImgLoading from '../../fragments/ImgLoading';

function Periodontics() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="periodontics" text="Periodontologia" />
			<article className="page-content">
				<section aria-labelledby="what-is-periodontics">
					<h2 id="what-is-periodontics">Czym zajmuje się periodontologia?</h2>
					<p>
						<b>Periodontologia</b> to dziedzina stomatologii zajmująca się leczeniem chorób <b>błony śluzowej i przyzębia</b>,
						czyli wszystkich tkanek utrzymujących zęby w kości. Choroby przyzębia występują powszechnie
						(dotyczą 50% dorosłych) i są <b>główną przyczyną utraty zębów</b>.
					</p>
				</section>
				<section aria-labelledby="periodontal-disease-causes">
					<h2 id="periodontal-disease">Przyczyny powstania chorób przyzębia?</h2>
					<p>
						Choroby przyzębia są schorzeniami wieloczynnikowymi, ale czynnikiem pierwotnym są zawsze <b>bakterie płytki nazębnej</b>.
					</p>
					<p>
						Przedłużające się nagromadzenie płytki bakteryjnej powoduje <b>pojawienie się zjadliwych szczepów bakterii</b>,
						których oddziaływanie na tkanki przyzębia jest wyjątkowo niebezpieczne.
					</p>
					<div className="text-img normal">
						<div className="photos">
							<div className="page-photo">
								<ImgLoading src={Images.Cigarette} />
								<span></span>
							</div>
						</div>
						<div>
							<p>
								<b>Inne powody</b> chorób przyzębia to także:
							</p>
							<ul>
								<li>czynniki niezależne: wiek, płeć, rasa, kondycja układu odpornościowego, czynnik genetyczny</li>
								<li>specyficzna flora bakteryjna</li>
								<li><b>palenie tytoniu</b> (zależne od ilości wypalonych papierosów)</li>
								<li>cukrzyca</li>
								<li>otyłość</li>
								<li>osteoporoza</li>
								<li><abbr title="Human Immunodeficiency Viruses">HIV</abbr></li>
								<li>stres</li>
							</ul>
						</div>
					</div>
					<h3>Rodzaje chorób przyzębia</h3>
					<p>
						Choroby przyzębia to duża i różnorodna grupa schorzeń, ale najczęściej obserwowane są:
					</p>
					<h4>Zapalenie dziąseł</h4>
					<p>
						Dotyczy tkanek miękkich otaczających ząb, jest odwracalna i nie pozostawia skutków ubocznych
					</p>
					<h4>Zapalenie przyzębia</h4>
					<p>
						<b>Dotyczy wszystkich tkanek utrzymujących ząb w zębodole</b>, czyli dziąsła, więzadeł, ozębnej, okostnej i kości.
						Skutki zapalenia tych tkanek są nieodwracalne i prowadzą do <b>zniszczenia kości</b>, a w konsekwencji do
						rozchwiania zęba i jego utraty.
					</p>
				</section>
				<section aria-labelledby="treatment">
					<h2>Objawy chorób przyzębia</h2>
					<p>
						Choroby przyzębia są schorzeniem przewlekłym, ich objawy mogą przez długi czas być<b> niezauważone</b> i
						traktowane jak coś naturalnego. Objawami, na które trzeba zwrócić uwagę są:
					</p>
					<ul>
						<li><b>zaczerwienienie dziąsła</b>, mogące przybierać nawet odcień siny</li>
						<li>obrzęk dziąsła</li>
						<li><b>krwawienie</b> dziąsła</li>
						<li>nieprzyjemny zapach z ust</li>
						<li>wysięk ropny</li>
						<li>ruchomość zęba lub grupy zębów</li>
						<li>zmiana położenia zęba lub grupy zębów</li>
					</ul>
					<p>
						<b>Objawy bólowe pojawiają się rzadko</b> w szczególnych sytuacjach, np.:
					</p>
					<ul>
						<li>gdy stan zapalny występuje <b>nie tylko w przyzębiu</b>, ale również wewnątrz zęba</li>
						<li>przy <b>ropniach przyzębnych</b>, gdy zawartość ropna kieszonki przyzębnej nie ma możliwości swobodnego wypływu</li>
					</ul>
					<ImportantInfo>
						Zdrowe dziąsło jest <b>bladoróżowe</b>, jędrne i sprężyste. <b>Zdrowe dziąsło nie krwawi!</b> Natomiast
						nawet w ciężkiej postaci zapalenia przyzębia <b>można nie odczuwać bólu</b>.
					</ImportantInfo>
				</section>
				<section aria-labelledby="treatment">
					<h2 id="treatment">Ogólne zasady leczenia:</h2>
					<p>
						Ze względu na wieloobjawowość chorób przyzębia, każdy plan leczenia musi być przygotowany indywidualnie,
						jednak zawsze powinien przebiegać wg następującego schematu:
					</p>
					<ol className="wide">
						<li>
							<h3>Faza ogólna - przygotowawcza</h3>
							<p>
								{/* Wywiad dotyczący ogólnego stanu zdrowia  leczenie choroby ogólnoustrojowej. W chorobie podstawowej
								może ono wiązać się z zastosowanie dodatkowych leków, ich zmianą lub odstawieniem.
								-zaplanowanie szczegółowego leczenia specjalistycznego: zachowawczego, chirurgicznego, ortodontycznego, protetycznego. */}
								Leczenie periodontologiczne rozpoczyna się od wywiadu dotyczącego <b>ogólnego stanu zdrowia</b> pacjenta
								oraz <b>rozpoznania przyczyny wystąpienia choroby</b>.
							</p>
							<p>
								Kuracja choroby ogólnoustrojowej może wiązać się z zastosowaniem <b>dodatkowych leków</b>,
								ich zmianą lub odstawieniem.
							</p>
							<p>
								Następnie planowane jest szczegółowe leczenie specjalistyczne:
							</p>
							<ul>
								<li>zachowawcze</li>
								<li>chirurgiczne</li>
								<li>ortodontyczne</li>
								<li>protetyczne</li>
							</ul>
							<p>przygotowane indywidualnie dla każdego pacjenta.</p>
						</li>
						<li>
							<h3>Faza przyczynowa</h3>
							<p>
								Jej celem jest <b>eliminacja podstawowego czynnika patologicznego</b>, jakim jest płytka bakteryjna,
								podczas zabiegu <Link to="/offer/prevention" className="text-link"><b>scalingu</b></Link>.
							</p>
							<p>
								Kamień, który utworzył się powyżej linii dziąseł jest widoczny w postaci brązowych, czarnych lub
								zielonych złogów wokół szyjek zębów. Największe jednak uszkodzenie tkanek powoduje <b>ukryty kamień poddziąsłowy</b>.
							</p>
							<p>
								Zabiegiem eliminującym skupiska bakterii, kamień i ziarninę zapalną z kieszonek dziąsłowych jest <b> kiretaż</b>.
								Używa się do niego specjalnego zestawu narzędzi zwanych kiretami. Celem tego postępowania oprócz <b>eliminacji
									czynników zapalnych</b> jest <b>spłycenie kieszonek dziąsłowych</b>.
							</p>
							<p>
								Dodatkowo zaleca się do płukania jamy ustnej <b>preparaty antyseptyczne</b> w postaci płukanek oraz żele do masażu dziąseł.
							</p>
							<p>
								W tej fazie przeprowadza się również kompleksowe leczenie jamy ustnej, które może obejmować:
							</p>
							<ul>
								<li>usunięcie nawisów wypełnień</li>
								<li><Link to="/offer/aesthetic-dentistry" className="text-link">wymianę nieprawidłowych wypełnień</Link></li>
								<li><Link to="/offer/conservative-dentistry" className="text-link">leczenie próchnicy</Link></li>
								<li><Link to="/offer/dental-surgery" className="text-link">ekstrakcje korzeni zębów i zębów żle rokujących</Link></li>
								<li>unieruchomienie zębów rozchwianych</li>
							</ul>
						</li>
						<li>
							<h3>Faza korekcyjna:</h3>
							<p>
								Warunkiem rozpoczęcia tej fazy leczenia jest <b>osiągnięcie trwałych efektów optymalnej higieny jamy ustnej</b>.
								Pozwala to na wykonanie zaplanowanych w fazie przygotowawczej
								zabiegów <Link to="/offer/dental-surgery" className="text-link">chirurgicznych</Link>,
								ortodontycznych lub <Link to="/offer/dental-surgery" className="text-link">protetycznych</Link>.
							</p>
							<p>
								Do <b>specjalistycznych chirurgicznych procedur periodontologicznych</b> należą następujące zabiegi:
							</p>
							<ul>
								<li>
									<b>wycięcie fragmentów dziąsła</b> celem stworzenia lepszego dostępu koniecznego do precyzyjnego oczyszczenia trudno
									dostępnych powierzchni korzeni
								</li>
								<li>
									<b>sterowana regeneracja tkanek</b> z użyciem materiału kościotwórczego, pozwalająca na odtworzenie brakującej kości
								</li>
								<li>
									<b>hemisekcja lub radektomia</b> (patrz <Link to="/offer/dental-surgery" className="text-link">Chirurgia Stomatologiczna</Link>),
									wykonywane w sytuacji, gdy jeden z korzeni objęty jest rozległym zanikiem kości, która przy pozostałych
									korzeniach jest zachowana dobrze.
								</li>
							</ul>
						</li>
						<li>
							<h3>Faza podtrzymująca</h3>
							<p>
								Jest <b>najważniejszą fazą</b>, ponieważ gwarantuje <b>utrzymanie długoterminowego efektu</b> całego leczenia.
								Polega na zachowaniu idealnego poziomu higieny jamy ustnej i regularnych wizytach kontrolnych w terminach
								wyznaczonych przez lekarza.
							</p>
						</li>
					</ol>
					<ImportantInfo>
						Jeśli pacjent dopuści do ponownego przewlekłego krwawienia dziąseł, to ryzyko utraty zębów rośnie <b>26 razy</b>!
					</ImportantInfo>
				</section>
			</article>
		</main>
	);
}

export default Periodontics;
