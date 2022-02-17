import '../../styles/main.scss';

function Implants() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="prices">
				<div className="banner-title">
					<h1>Cennik</h1>
				</div>
			</div>
			<article className="page-content">
				<section className="prices">
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
				</section>
			</article>
		</main >
	);
}

export default Implants;
