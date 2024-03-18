import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ParallaxBanner from '../fragments/ParallaxBanner';
import ImgLoading from '../fragments/ImgLoading';
import { FaChevronDown } from 'react-icons/fa';

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = 'oparty na rodzinnej tradycji lekarskiej';

	const articleRef = useRef();

	const handleScroll = () => {
		window.scrollTo({
			top: articleRef.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<main className='main-wrapper page-wrapper' role='main'>
			<ParallaxBanner
				id='main-page'
				text={device1st}
				text2={'\n' + device2nd}
			>
				<Link className='button' to='/umow-wizyte'>
					Zapisz się na wizytę
				</Link>
				<Link
					className='scroll-down-button'
					to='/'
					onClick={handleScroll}
				>
					<FaChevronDown />
				</Link>
				<div className='quote'>
					<q>Salus aegroti suprema lex</q>
					<p>Dobro chorego najwyższym prawem</p>
					<p className='author'>~Hipokrates</p>
				</div>
			</ParallaxBanner>
			<article ref={articleRef}>
				<section aria-labelledby='diagnostic'>
					<div className='main-page-container'>
						<div className='main-page-img'>
							<ImgLoading
								src={
									'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/diagnostics/plan.jpeg'
								}
								alt='Plan leczenia'
							/>
						</div>
						<div className='main-page-title'>
							<h2 id='diagnostic'>
								Bezpłatna wizyta diagnostyczna!
							</h2>
						</div>
						<div className='main-page-text'>
							<p>
								Bezpłatna wizyta diagnostyczna jest propozycją
								dla osób, które dawno nie były u lekarza
								stomatologa i obawiają się takiej wizyty. Warto
								z niej skorzystać i nie czekać na ból zęba.
							</p>
							<Link
								className='button'
								to='/oferta/wizyta-diagnostyczna'
							>
								Zobacz więcej
							</Link>
						</div>
					</div>
				</section>

				<section aria-labelledby='inlay-onlay-overlay'>
					<div className='main-page-container'>
						<div className='main-page-title'>
							<h2 id='inlay-onlay-overlay'>
								Inley'e, Onley'e, Overley'e
							</h2>
						</div>
						<div className='main-page-text'>
							<p>
								Luksusowe wypełnienia! Warto wymienić
								standardowe wypełnienia kompozytowe na
								najwyższej jakości wypełnienia wykonywane w
								laboratorium i przyklejane w specjalnej
								technologii adhezyjnej.
							</p>
							<Link
								className='button'
								to='/oferta/inlay-onlay-overlay-endokorony'
							>
								Zobacz więcej
							</Link>
						</div>
						<div className='main-page-img'>
							<ImgLoading
								src={
									'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/inlay-onlay/onlay.jpeg'
								}
								alt='Onlay'
							/>
						</div>
					</div>
				</section>

				<section aria-labelledby='digital-dent'>
					<div className='main-page-container'>
						<div className='main-page-img'>
							<ImgLoading
								src={
									'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/digital/dsd.jpeg'
								}
								alt='Stomatologia cyfrowa'
							/>
						</div>
						<div className='main-page-title'>
							<h2 id='digital-dent'>Stomatologia cyfrowa</h2>
						</div>
						<div className='main-page-text'>
							<p>
								Najnowocześniejsza technologia cyfrowa umożliwia
								zaprojektowanie i prezentację nowego wyglądu
								zębów. Wizualizacja planu zmiany ich wyglądu
								przed jego realizacją zdecydowanie ułatwia
								podjęcie decyzji.
							</p>
							<Link
								className='button'
								to='/oferta/stomatologia-cyfrowa'
							>
								Zobacz więcej
							</Link>
						</div>
					</div>
				</section>

				<section aria-labelledby='clear-aligner'>
					<div className='main-page-container'>
						<div className='main-page-title'>
							<h2 id='clear-aligner'>Clear Aligner</h2>
						</div>
						<div className='main-page-text'>
							<p>
								Małe nieprawidłowości w ustawieniu zębów nie
								wymagają bezwzględnego zakładania stałego
								aparatu ortodontycznego. Można je skorygować
								zestawem przezroczystych szyn nazębnych w ciągu
								kilku tygodni.
							</p>
							<Link
								className='button'
								to='/oferta/stomatologia-estetyczna'
							>
								Zobacz więcej
							</Link>
						</div>
						<div className='main-page-img'>
							<ImgLoading
								src={
									'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/aesthetics/clear_aligner.jpeg'
								}
								alt='Clear aligner'
							/>
						</div>
					</div>
				</section>
			</article>
		</main>
	);
}

export default MainPage;
