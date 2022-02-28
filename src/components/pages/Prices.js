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
			</article>
		</main >
	);
}

export default Implants;
