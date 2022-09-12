import Images from '../../img/offers';
import ParallaxBaner from '../fragments/ParallaxBanner';
import SingleOffer from '../fragments/SingleOffer';

function Offer() {
	return (
<<<<<<< HEAD
		<main className="page-wrapper" role="main">
			<ParallaxBaner id="offer" text="Oferta" />
			<article className="page-content">
				<section className="offers">
					<SingleOffer
						image={Images.Diagnostics}
						title="Wizyta Diagnostyczna"
						link="/offer/diagnostics"
					>
						<b>BEZPŁATNA WIZYTA DIAGNOSTYCZNA</b> dostarcza wiedzy na temat wszystkich zębów.
					</SingleOffer>
					<SingleOffer
						image={Images.Prevention}
						title="Profilaktyka"
						link="/offer/prevention"
					>
						Profilaktyka, to podstawowy dział stomatologii,
						zajmujący się zapobieganiem chorób jamy ustnej oraz uświadamianiem,
=======
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='offer' text='Oferta' />
			<article className='page-content'>
				<section className='offers'>
					<SingleOffer image={Images.Diagnostics} title='Wizyta Diagnostyczna' link='/offer/diagnostics'>
						<b>BEZPŁATNA WIZYTA DIAGNOSTYCZNA</b> dostarcza wiedzy na temat wszystkich zębów.
					</SingleOffer>
					<SingleOffer image={Images.Prevention} title='Profilaktyka' link='/offer/prevention'>
						Profilaktyka, to podstawowy dział stomatologii, zajmujący się zapobieganiem chorób jamy ustnej oraz uświadamianiem,
>>>>>>> 989e3494dc7cb4f32ef569bc75d1edf7d763c86d
						jak ważna w życiu codziennym jest prawidłowa higiena.
					</SingleOffer>
					<SingleOffer image={Images.Aesthetics} title='Stomatologia Estetyczna' link='/offer/aesthetic-dentistry'>
						Stomatologia estetyczna zajmuje się nadaniem zębom jak najbardziej naturalnego wyglądu lub ich upiększeniem, czego
						efektem staje się piękny, naturalny uśmiech.
					</SingleOffer>
					<SingleOffer image={Images.DigitalDentistry} title='Stomatologia Cyfrowa' link='/offer/digital-dentistry'>
						Wykorzystując najnowocześniejsze rozwiązania technologiczne, umożliwia pełne zaprojektowanie uśmiechu.
					</SingleOffer>
					<SingleOffer image={Images.InlayOnlay} title="Onley'e Endokorony" link='/offer/inlay-onlay'>
						Inaczej wkłady koronowe, są to wypełnienia zębów o bardzo wysokiej jakości.
					</SingleOffer>
<<<<<<< HEAD
					<SingleOffer
						image={Images.Prosthodontics}
						title="Protetyka"
						link="/offer/prosthodontics"
					>
						Dział stomatologii zajmujący się odbudową bardzo zniszczonych zębów lub uzupełnieniem utraconych.
=======
					<SingleOffer image={Images.Prosthodontics} title='Protetyka' link='/offer/prosthodontics'>
						Protetyka jest działem stomatologii zajmującym się odbudową bardzo zniszczonych zębów lub uzupełnieniem utraconych.
>>>>>>> 989e3494dc7cb4f32ef569bc75d1edf7d763c86d
					</SingleOffer>
					<SingleOffer image={Images.Conservatives} title='Stomatologia Zachowawcza' link='/offer/conservative-dentistry'>
						Stomatologia zachowawcza zajmuje się wykrywaniem i leczeniem najbardziej rozpowszechnionej choroby zębów, jaką jest
						próchnica.
					</SingleOffer>
					<SingleOffer image={Images.Endodontics} title='Endodoncja' link='/offer/endodontics'>
						Endodoncja jest dziedziną stomatologii zajmującą się leczeniem kanałów w zębach.
					</SingleOffer>
<<<<<<< HEAD
					<SingleOffer
						image={Images.Periodontics}
						title="Periodontologia"
						link="/offer/periodontics"
					>
						Dziedzina stomatologii zajmująca się leczeniem chorób błony śluzowej i przyzębia.
					</SingleOffer>
					<SingleOffer
						image={Images.Surgeries}
						title="Chirurgia Stomatologiczna"
						link="/offer/dental-surgery"
					>
						Gdy zęba nie da się już uratować, podejmuje się decyzję o usunięciu jego części lub całości.
					</SingleOffer>
					<SingleOffer
						image={Images.Implants}
						title="Implanty"
						link="/offer/implants"
					>
						Uzupełniają brakujący ząb.
=======
					<SingleOffer image={Images.Periodontics} title='Periodontologia' link='/offer/periodontics'>
						Dziedzina stomatologii zajmująca się leczeniem chorób błony śluzowej i przyzębia.
					</SingleOffer>
					<SingleOffer image={Images.Surgeries} title='Chirurgia Stomatologiczna' link='/offer/dental-surgery'>
						Gdy zęba nie da się już uratować, podejmuje się decyzję o usunięciu jego części lub całości.
					</SingleOffer>
					<SingleOffer image={Images.Implants} title='Implanty' link='/offer/implants'>
						Uzupełniają brakujący korzeń, cały ząb lub część uzębienia.
>>>>>>> 989e3494dc7cb4f32ef569bc75d1edf7d763c86d
					</SingleOffer>
					<SingleOffer image={Images.Joints} title='Leczenie Stawów' link='/offer/joints'>
						Zaburzenia funkcji stawów skroniowo-żuchwowych są przyczyną poważnych problemów ze szczęką oraz funkcjonowaniem całego
						narządu żucia.
					</SingleOffer>
				</section>
			</article>
		</main>
	);
}

export default Offer;
