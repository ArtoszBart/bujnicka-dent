import ImportantInfo from '../../fragments/pages/ImportantInfo';
import Images from '../../../img/texts/surgeries';
import ParallaxBaner from '../../fragments/ParallaxBanner'
import ImgLoading from '../../fragments/ImgLoading';

function DentalSurgery() {

	return (
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="dental-surgery" text="Chirurgia Stomatoligiczna" />
			<article className="page-content">
				<section aria-labelledby="what-is-dental-surgery">
					<h2 id="what-is-dental-surgery">Czym zajmuje się Chirurgia Stomatologiczna</h2>
					<p>
						Chirurgia Stomatologiczna obejmuje szereg zabiegów w jamie ustnej, wykonywanych w znieczuleniu miejscowym.
					</p>
				</section>
				<section aria-labelledby="tooth-extraction">
					<h2 id="tooth-extraction">Ekstrakcje Zębów</h2>
					<p>
						Czasami zęba nie da się już uratować, podejmuje się wtedy decyzję o jego <b>usunięciu - ekstrakcji</b>. Jest to ostateczność,
						więc należy dokładać wszelkich starań, aby do tego nie dopuszczać. Jednocześnie informuje się pacjenta
						o <b>możliwościach rekonstrukcji brakującego zęba</b> tak, aby odtworzyć sytuację w jamie ustnej sprzed zabiegu.
					</p>

					<h3>Wskazaniem do usunięcia zęba są:</h3>
					<ul>
						<li><b>rozległe zniszczenie zęba</b> uniemożliwiające odbudowę</li>
						<li><b>wskazania protetyczne</b>, np. przechylenie zęba uniemożliwiające zastosowanie rozwiązania protetycznego</li>
						<li><b>wskazania periodontologiczne</b>, np. rozchwianie zęba nie kwalifikujące się do leczenia</li>
						<li><b>wskazania ortodontyczne</b>, np. stłoczenia zębów</li>
						<li><b>wskazania chirurgiczne</b>, np. torbiel korzeniowa</li>
						<li><b>wskazania ogólnoustrojowe</b>, np. przygotowanie pacjenta do przeszczepu narządu</li>
					</ul>

					<h3>Usuwanie Ósemek</h3>
					<div className="text-img upright">
						<div className="photos">
							<div className="page-photo">
								<ImgLoading src={Images.Bad8th} alt="" />
								<span>Niewłaściwe położenie ósemki</span>
							</div>
						</div>
						<div>
							<p>
								Szczególną grupą zębów, które bardzo często usuwa się są <b>ósemki</b> (zęby mądrości).
								Położone są w miejscach, które mają zdecydowanie <b>mniejsze możliwości samooczyszczania</b>,
								i do których <b>bardzo trudno dociera się szczoteczką</b>. Dlatego narażone są, częściej niż inne
								grupy zębów, na szybszy rozwój zmian próchniczych. Zdarza się, że już w momencie ich
								wyrzynania się, są objęte próchnicą w stopniu uniemożliwiającym ich leczenie.
							</p>
							<p>
								Często też ósemki <b>rosną w niewłaściwym położeniu</b>, pod kątem, napierając na pozostałe zęby i <b>powodując ból</b>.
								Przyczyną bólu mogą być również tzw. <dfn>kieszonki patologiczne</dfn>, czyli fałdy nieprzylegającej do
								zęba błony śluzowej, gdzie gromadzące się resztki jedzenia powodują powstanie <b>stanu zapalnego dziąsła</b>.
							</p>
							<p>
								Skrajną sytuacją jest <b>brak miejsca na wyrżnięcie zęba mądrości</b>. Powoduje on wtedy ściśnięcie się
								pozostałych zębów w szczęce, a nawet wypchnięcie któregoś z nich, najczęściej przedniego, poza szereg.
								W niektórych przypadkach ósemki w ogóle nie wyrzynają się, rosnąc <b>poziomo w kości</b> i powodując
								objawy bólowe. Mogą być wtedy przyczyną powstania zmian zapalnych w kości oraz <b>torbieli</b>.
							</p>
						</div>
					</div>
					<ImportantInfo>
						Usuwanie ósemek (szczególnie dolnych), jest zabiegiem skomplikowanym i wymaga, do oceny stopnia jego trudności,
						wykonania <b>pantomogramu</b>, który pokaże dokładne umiejscowienie zęba. Częściej niż zwykle zabieg ten obarczony
						jest ryzykiem <b>powikłań</b>.
					</ImportantInfo>
					<p>
						Możliwe <b>powikłania</b> ekstrakcji ósemek:
					</p>
					<ul>
						<li>szczękościsk</li>
						<li>obrzęk policzka lub kąta żuchwy</li>
						<li>powstanie krwiaka</li>
						<li>przedłużone krwawienie</li>
						<li>zapalenie zębodołu</li>
						<li>porażenie nerwu zębodołowego, czego objawem są zaburzenia czucia w obrębie wargi dolnej</li>
					</ul>
				</section>
				<section aria-labelledby="hemisection-and-radectomy">
					<h2 id="hemisection-and-radectomy">Hemisekcja i Radektomia</h2>
					<p>
						Są to zabiegi tzw. <b>ostatniej szansy dla zębów trzonowych</b>, kiedy tylko jeden
						korzeń objęty jest zmianami zapalnymi i nie poddaje się on leczeniu zachowawczemu.
					</p>
					<h3>Hemisekcja</h3>
					<p>
						Dotyczy zębów trzonowych żuchwy i polega na <b>wycięciu chirurgicznym połowy zęba</b>.
					</p>
					<h3>Radektomia</h3>
					<p>
						Wykonuje się ją natomiast w zębach trzonowych szczęki i polega ona na chirurgicznym <b>wycięciu jednego z korzeni</b>.
					</p>
					<ImportantInfo>
						Pozostałe fragmenty zęba wykorzystuje się do odbudowy protetycznej wkładem koronowo-korzeniowym i koroną estetyczną.
					</ImportantInfo>
				</section>
				<section aria-labelledby="resection">
					<h2 id="resection">Resekcja</h2>
					<p>
						Dotyczy <b>wierzchołków korzeni zębów</b> najczęściej jednokorzeniowych i polega na
						ich <b>chirurgicznym wycięciu wraz ze zmianami zapalnymi</b>, które je obejmują. Jest
						to <b>ostateczny zabieg, który chroni ząb przed ekstrakcją</b>.
					</p>
					<h3>Wskazania do resekcji:</h3>
					<ul>
						<li>zastosowane leczenie zachowawcze nie spowodowało cofnięcia się zmian zapalnych</li>
						<li>brak możliwości leczenia kanałowego ze względu na skomplikowaną anatomię wierzchołka korzenia</li>
						<li>
							brak możliwości przeprowadzenia koniecznej rewizji zęba z powodu wypełnienia
							kanału twardym materiałem lub istniejącej na zębie odbudowy protetycznej
						</li>
					</ul>
				</section>
				<section aria-labelledby="implantology-surgery">
					<h2 id="implantology-surgery">Chirurgia Implantologiczna</h2>
					<p>
						Dział ten obejmuje zabiegi <b>poprawiające warunki kostne szczęk przed implantacją</b>.
					</p>
					<p>
						Należą do nich między innymi:
					</p>
					<ul>
						<li><dfn>sinus lift</dfn> - podniesienie dna zatoki szczękowej przy braku wystarczającej ilości tkanki kostnej w szczęce</li>
						<li><dfn>sterowana regeneracja tkanek</dfn> - odtworzenie kości, która uległa zanikowi po dawnej ekstrakcji</li>
						<li><dfn>augmentacja</dfn> - powiększenie wymiaru poprzecznego kości</li>
						<li><b>autoprzeszczep</b></li>
					</ul>
				</section>
			</article>
		</main>
	);
}

export default DentalSurgery;
