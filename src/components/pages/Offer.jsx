import Images from '../../img/offers';
import ParallaxBaner from '../fragments/ParallaxBanner';
import SingleOffer from '../fragments/SingleOffer';

function Offer() {
	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='offer' text='Oferta' />
			<article className='page-content'>
				<section className='offers'>
					<SingleOffer
						image={Images.Diagnostics}
						title='Wizyta Diagnostyczna'
						link='/oferta/wizyta-diagnostyczna'
					>
						<b>BEZPŁATNA WIZYTA DIAGNOSTYCZNA</b> dostarcza wiedzy
						na temat wszystkich zębów.
					</SingleOffer>
					<SingleOffer
						image={Images.Prevention}
						title='Profilaktyka'
						link='/oferta/profilaktyka'
					>
						Profilaktyka, to podstawowy dział stomatologii,
						zajmujący się zapobieganiem chorób jamy ustnej oraz
						uświadamianiem, jak ważna w życiu codziennym jest
						prawidłowa higiena.
					</SingleOffer>
					<SingleOffer
						image={Images.Aesthetics}
						title='Stomatologia Estetyczna'
						link='/oferta/stomatologia-estetyczna'
					>
						Stomatologia estetyczna zajmuje się nadaniem zębom jak
						najbardziej naturalnego wyglądu lub ich upiększeniem,
						czego efektem staje się piękny, naturalny uśmiech.
					</SingleOffer>
					<SingleOffer
						image={Images.DigitalDentistry}
						title='Stomatologia Cyfrowa'
						link='/oferta/stomatologia-cyfrowa'
					>
						Wykorzystując najnowocześniejsze rozwiązania
						technologiczne, umożliwia pełne zaprojektowanie
						uśmiechu.
					</SingleOffer>
					<SingleOffer
						image={Images.InlayOnlay}
						title="Onley'e Endokorony"
						link='/oferta/inlay-onlay-overlay-endokorony'
					>
						Inaczej wkłady koronowe, są to wypełnienia zębów o
						bardzo wysokiej jakości.
					</SingleOffer>
					<SingleOffer
						image={Images.Prosthodontics}
						title='Protetyka'
						link='/oferta/protetyka'
					>
						Dział stomatologii zajmujący się odbudową bardzo
						zniszczonych zębów lub uzupełnieniem utraconych.
					</SingleOffer>
					<SingleOffer
						image={Images.Conservatives}
						title='Stomatologia Zachowawcza'
						link='/oferta/stomatologia-zachowawcza'
					>
						Stomatologia zachowawcza zajmuje się wykrywaniem i
						leczeniem najbardziej rozpowszechnionej choroby zębów,
						jaką jest próchnica.
					</SingleOffer>
					<SingleOffer
						image={Images.Endodontics}
						title='Endodoncja'
						link='/oferta/endodontics'
					>
						Endodoncja jest dziedziną stomatologii zajmującą się
						leczeniem kanałów w zębach.
					</SingleOffer>
					<SingleOffer
						image={Images.Periodontics}
						title='Periodontologia'
						link='/oferta/periodontologia'
					>
						Dziedzina stomatologii zajmująca się leczeniem chorób
						błony śluzowej i przyzębia.
					</SingleOffer>
					<SingleOffer
						image={Images.Surgeries}
						title='Chirurgia Stomatologiczna'
						link='/oferta/chirurgia-stomatoligiczna'
					>
						Gdy zęba nie da się już uratować, podejmuje się decyzję
						o usunięciu jego części lub całości.
					</SingleOffer>
					<SingleOffer
						image={Images.Implants}
						title='Implanty'
						link='/oferta/implanty'
					>
						Uzupełniają brakujący ząb.
					</SingleOffer>
					<SingleOffer
						image={Images.Joints}
						title='Leczenie Stawów'
						link='/oferta/leczenie-stawów-skroniowo-zuchwowych'
					>
						Zaburzenia funkcji stawów skroniowo-żuchwowych są
						przyczyną poważnych problemów ze szczęką oraz
						funkcjonowaniem całego narządu żucia.
					</SingleOffer>
				</section>
			</article>
		</main>
	);
}

export default Offer;
