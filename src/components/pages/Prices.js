import '../../styles/main.scss';
import { useState } from "react"
import TabNavItem from '../fragments/tabs/TabNavItem'
import TabContent from '../fragments/tabs/TabContent'
import SinglePrice from '../fragments/prices/SinglePrice'
import MultiplePrices from '../fragments/prices/MultiplePrice'

function Implants() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="prices">
				<div className="banner-title">
					<h1>Cennik</h1>
				</div>
			</div>
			<article className="page-content">

				<ul className="tabs-nav">
					<TabNavItem title="Podstawowe usługi" id={0} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Profilaktyka" id={1} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Stomatologia estetyczna" id={2} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Stomatologia zachowawcza" id={3} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Endodoncja" id={4} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Periodontologia" id={5} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Protetyka" id={6} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Implanty" id={7} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Chirurgia" id={8} activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabNavItem title="Stawy skroniowo-żuchwowe" id={9} activeTab={activeTab} setActiveTab={setActiveTab} />
				</ul>

				<TabContent id={0} activeTab={activeTab}>
					<h2>Podstawowe usługi</h2>
					<SinglePrice name="Wizyta diagnostyczna" price="bezpłatnie" />
					<SinglePrice name="Wizyta kontrolna" price="bezpłatnie" />
					<SinglePrice name="Konsultacja" price="bezpłatnie" />
					<SinglePrice name="Znieczulenie (również na życzenie pacjenta)" price="40 zł" />
				</TabContent>

				<TabContent id={1} activeTab={activeTab}>
					<h2>Profilaktyka</h2>
					<SinglePrice name="Scaling i likwidacja osadu (higienizacja)" price="200-300 zł" />
					<SinglePrice name="Fluoryzacja (lakierowanie)" price="120 zł" />
					<SinglePrice name="Lakowanie (1 ząb)" price="150 zł" />
				</TabContent>

				<TabContent id={2} activeTab={activeTab}>
					<h2>Stomatologia estetyczna</h2>
					<SinglePrice name="Wybielanie metodą nakładkową (dotyczy zębów żywych)" price="1420 zł" />
					<MultiplePrices
						title="Wybielanie metodą dokomorową (dotyczy zębów martwych)"
						names={["Pierwsza wizyta", "Każda następna wizyta"]}
						prices={["200 zł", "100 zł"]}
					/>
					<MultiplePrices
						title="Onlay lub Inlay"
						names={["Kompozytowy", "Porcelanowy"]}
						prices={["900 zł", "1200 zł"]}
					/>
					<SinglePrice name="Wypełnienie estetyczne" price="380-400 zł" />
					<SinglePrice name="Licówka" price="1800 zł" />
				</TabContent>

				<TabContent id={3} activeTab={activeTab}>
					<h2>Stomatologia zachowawcza</h2>
					<SinglePrice name="Leczenie biologiczne miazgi" price="200 zł" />
					<SinglePrice name="Wypełnienia (Plomby)" price="160-450 zł" />
					<MultiplePrices
						title="Onlay lub Inlay"
						names={["Kompozytowy", "Porcelanowy"]}
						prices={["900 zł", "1200 zł"]}
					/>
				</TabContent>

				<TabContent id={4} activeTab={activeTab}>
					<h2>Endodoncja</h2>
					<MultiplePrices
						title="Leczenie kanałowe zęba"
						names={["1-kanałowego", "2-kanałowego", "3-kanałowego", "4-kanałowego"]}
						prices={["500 zł", "570 zł", "650 zł", "730 zł"]}
					/>
					<aside>Cena leczenia kanałowego uzależniona jest od stopnia zaawansowania oraz przebiegu choroby.
						Powyższe ceny dotyczą leczenia bez powikłań.</aside>
				</TabContent>

				<TabContent id={5} activeTab={activeTab}>
					<h2>Periodontologia</h2>
					<SinglePrice name="Scaling i likwidacja osadu" price="200-250 zł" />
					<SinglePrice name="Kiretaż" price="180-280 zł" />
				</TabContent>

				<TabContent id={6} activeTab={activeTab}>
					<h2>Protetyka</h2>
					<SinglePrice name="Wkład koronowo-korzeniowy" price="450-800 zł" />
					<SinglePrice name="Korona estetyczna" price="1400-1600 zł" />
					<SinglePrice name="Most (cena za jeden ząb w moście)" price="1200 zł" />
					<SinglePrice name="Most teleskopowy (cena przybliżona za 1 ząb filarowy)" price="3000 zł" />
					<SinglePrice name="Proteza akrylowa (za jeden punkt w protezie)" price="150 zł" />
					<SinglePrice name="Proteza całkowita" price="2100 zł" />
					<SinglePrice name="Proteza szkieletowa" price="2500 zł" />
					<SinglePrice name="Proteza bezklamrowa z zamkami typu CEKA" price="od 5000 zł" star />
					<SinglePrice name="Proteza bezklamrowa z ryglem" price="od 3400 zł" star />
					<MultiplePrices
						title="Onlay lub Inlay"
						names={["Kompozytowy", "Porcelanowy"]}
						prices={["900 zł", "1200 zł"]}
					/>
					<dd>* Konieczna jest wycena indywidualna pracy protetycznej.</dd>
				</TabContent>

				<TabContent id={7} activeTab={activeTab}>
					<h2>Implanty</h2>
					<SinglePrice name="Implant (Część chirurgiczna)" price="3000 zł" />
					<SinglePrice name="Implant (Część protetyczna)" price="3000 zł" />
				</TabContent>

				<TabContent id={8} activeTab={activeTab}>
					<h2>Chirurgia</h2>
					<SinglePrice name="Ekstrakcja (usunięcie) zęba" price="250 zł" star />
					<SinglePrice name="Ekstrakcja złożona" price="350 zł" />
					<SinglePrice name="Szycie zębodołu" price="80 zł" />
					<dd>* W przypadku jednoczesnej ekstrakcji kilku zębów, kolejny ząb - 80 zł</dd>
				</TabContent>

				<TabContent id={9} activeTab={activeTab}>
					<h2>Choroby stawów skroniowo-żuchwowych</h2>
					<SinglePrice name="Szyna relaksacyjna" price="500 zł" />
				</TabContent>

				{/* <section className="prices">
					<h2>Podstawowe usługi</h2>
					<div className="prices-item">
						<p>Wizyta diagnostyczna</p><p>bezpłatnie</p>
					</div>
					<div className="prices-item">
						<p>Wizyta kontrolna</p><p>bezpłatnie</p>
					</div>
					<div className="prices-item">
						<p>Konsultacja</p><p>bezpłatnie</p>
					</div>
					<div className="prices-item">
						<p>Znieczulenie (również na życzenie pacjenta)</p><p>40 zł</p>
					</div>
				</section>


				<section className="prices">
					<h2>Profilaktyka</h2>
					<div className="prices-item">
						<p>Scaling i likwidacja osadu (higienizacja)</p>
						<p>200-300 zł</p>
					</div>
					<div className="prices-item">
						<p>Fluoryzacja (lakierowanie)</p>
						<p>120 zł</p>
					</div>
					<div className="prices-item">
						<p>Lakowanie (1 ząb)</p>
						<p>150 zł</p>
					</div>
				</section>


				<section className="prices">
					<h2>Stomatologia estetyczna</h2>
					<div className="prices-item">
						<p>Wybielanie metodą nakładkową (dotyczy zębów żywych)</p>
						<p>1420 zł</p>
					</div>
					<div className="prices-item prices-multiple">
						<p>Wybielanie metodą dokomorową (dotyczy zębów martwych):</p>
						<div className="prices-multiple-items">
							<p>Pierwsza wizyta</p>
							<p>200 zł</p>
							<p>Każda następna wizyta</p>
							<p>100 zł</p>
						</div>
					</div>
					<div className="prices-item prices-multiple">
						<p>Onlay lub Inlay:</p>
						<div className="prices-multiple-items">
							<p>Kompozytowy</p><p>900 zł</p>
							<p>Porcelanowy</p><p>1200 zł</p>
						</div>
					</div>
					<div className="prices-item">
						<p>Wypełnienie estetyczne</p><p>380-400 zł</p>
					</div>
					<div className="prices-item">
						<p>Licówka</p><p>1800 zł</p>
					</div>
				</section>


				<section className="prices">
					<h2>Stomatologia zachowawcza</h2>
					<div className="prices-item">
						<p>Leczenie biologiczne miazgi</p><p>200 zł</p>
					</div>
					<div className="prices-item">
						<p>Wypełnienia (Plomby)</p><p>160-450 zł</p>
					</div>
					<div className="prices-item prices-multiple">
						<p>Onlay lub Inlay:</p>
						<div className="prices-multiple-items">
							<p>Kompozytowy</p><p>900 zł</p>
							<p>Porcelanowy</p><p>1200 zł</p>
						</div>
					</div>
				</section>


				<section className="prices">
					<h2>Endodoncja</h2>
					<div className="prices-item prices-multiple">
						<p>Leczenie kanałowe zęba</p>
						<div className="prices-multiple-items">
							<p>1-kanałowego</p><p>500 zł</p>
							<p>2-kanałowego</p><p>570 zł</p>
							<p>3-kanałowego</p><p>650 zł</p>
							<p>4-kanałowego</p><p>730 zł</p>
						</div>
					</div>
					<aside>Cena leczenia kanałowego uzależniona jest od stopnia zaawansowania oraz przebiegu choroby.
						Powyższe ceny dotyczą leczenia bez powikłań.</aside>
				</section>


				<section className="prices">
					<h2>Periodontologia</h2>
					<div className="prices-item">
						<p>Scaling i likwidacja osadu</p><p>200-250 zł</p>
					</div>
					<div className="prices-item">
						<p>Kiretaż</p><p>180-280 zł</p>
					</div>
				</section>


				<section className="prices">
					<h2>Protetyka</h2>
					<div className="prices-item">
						<p>Wkład koronowo-korzeniowy</p><p>450-800 zł</p>
					</div>
					<div className="prices-item">
						<p>Korona estetyczna</p><p>1400-1600 zł</p>
					</div>
					<div className="prices-item">
						<p>Most (cena za jeden ząb w moście)</p><p>1200 zł</p>
					</div>
					<div className="prices-item">
						<p>Most teleskopowy (cena przybliżona za 1 ząb filarowy)</p><p>3000 zł</p>
					</div>
					<div className="prices-item">
						<p>Proteza akrylowa (za jeden punkt w protezie)</p><p>150 zł</p>
					</div>
					<div className="prices-item">
						<p>Proteza całkowita</p><p>2100 zł</p>
					</div>
					<div className="prices-item">
						<p>Proteza szkieletowa</p><p>2500 zł</p>
					</div>
					<div className="prices-item">
						<p>Proteza bezklamrowa z zamkami typu CEKA</p><p>od 5000 zł<dt>*</dt></p>
					</div>
					<div className="prices-item">
						<p>Proteza bezklamrowa z ryglem</p><p>od 3400 zł<dt>*</dt></p>
					</div>

					<div className="prices-item prices-multiple">
						<p>Onlay lub Inlay:</p>
						<div className="prices-multiple-items">
							<p>Kompozytowy</p><p>900 zł</p>
							<p>Porcelanowy</p><p>1200 zł</p>
						</div>
					</div>
					<dd>* Konieczna jest wycena indywidualna pracy protetycznej.</dd>
				</section>


				<section className="prices">
					<h2>Implanty</h2>
					<div className="prices-item">
						<p>Implant (Część chirurgiczna)</p><p>3000 zł</p>
					</div>
					<div className="prices-item">
						<p>Implant (Część protetyczna)</p><p>3000 zł</p>
					</div>
				</section>


				<section className="prices">
					<h2>Chirurgia</h2>
					<div className="prices-item">
						<p>Ekstrakcja (usunięcie) zęba</p><p>250 zł<dt>*</dt></p>
					</div>
					<div className="prices-item">
						<p>Ekstrakcja złożona</p><p>350 zł</p>
					</div>
					<div className="prices-item">
						<p>Szycie zębodołu</p><p>80 zł</p>
					</div>

					<dd>* W przypadku jednoczesnej ekstrakcji kilku zębów, kolejny ząb - 80 zł</dd>
				</section>


				<section className="prices">
					<h2>Choroby stawów skroniowo-żuchwowych</h2>
					<div className="prices-item">
						<p>Szyna relaksacyjna</p><p>500 zł</p>
					</div>
				</section> */}
			</article>
		</main >
	);
}

export default Implants;
