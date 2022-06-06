import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ParallaxBanner from '../fragments/ParallaxBanner';
import ImgLoading from '../fragments/ImgLoading';
import DiagnosticsImg from '../../img/texts/diagnostics/plan.jpeg';

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = 'oparty na rodzinnej tradycji lekarskiej';

	const articleRef = useRef();

	const handleScroll = () => {
		window.scrollTo({
			top: articleRef.current.offsetTop,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<main className="main-wrapper page-wrapper" role="main">
			<ParallaxBanner id="main-page" text={device1st} text2={'\n' + device2nd}>
				<Link className="button" to="/appointment">Zapisz się na wizytę</Link>
				<Link className="scroll-down-button" to="/" onClick={handleScroll}><i className="fas fa-chevron-down"></i></Link>
				<div className="quote">
					<q>Salus aegroti suprema lex</q>
					<p>Dobro chorego najwyższym prawem</p>
					<p className="author">~Hipokrates</p>
				</div>
			</ParallaxBanner>
			<article ref={articleRef}>
				<section aria-labelledby="diagnostic">
					<div className='main-page-img'>
						<ImgLoading src={DiagnosticsImg} alt="" />
					</div>
					<div className="main-page-text">
						<h2 id="diagnostic">Bezpłatna wizyta diagnostyczna!</h2>
						<p>
							<b>Stomatologia zachowawcza</b> zajmuje się wykrywaniem i leczeniem najbardziej rozpowszechnionej choroby zębów,
							czyli <b>próchnicy</b> wraz z odtwarzaniem utraconych tkanek wskutek tej choroby oraz urazów.
						</p>
						<Link className="button" to="/offer/diagnostics">Zobacz więcej</Link>
					</div>
				</section>
				<section aria-labelledby="diagnostic">
					<div className="main-page-text">
						<h2 id="diagnostic">Bezpłatna wizyta diagnostyczna!</h2>
						<p>
							<b>Stomatologia zachowawcza</b> zajmuje się wykrywaniem i leczeniem najbardziej rozpowszechnionej choroby zębów,
							czyli <b>próchnicy</b> wraz z odtwarzaniem utraconych tkanek wskutek tej choroby oraz urazów.
						</p>
						<Link className="button" to="/offer/diagnostics">Zobacz więcej</Link>
					</div>
					<div className="main-page-img">
						<ImgLoading src={DiagnosticsImg} alt="" />
					</div>
				</section>
				<section aria-labelledby="diagnostic">
					<div className='main-page-img'>
						<ImgLoading src={DiagnosticsImg} alt="" />
					</div>
					<div className="main-page-text">
						<h2 id="diagnostic">Bezpłatna wizyta diagnostyczna!</h2>
						<p>
							<b>Stomatologia zachowawcza</b> zajmuje się wykrywaniem i leczeniem najbardziej rozpowszechnionej choroby zębów,
							czyli <b>próchnicy</b> wraz z odtwarzaniem utraconych tkanek wskutek tej choroby oraz urazów.
						</p>
						<Link className="button" to="/offer/diagnostics">Zobacz więcej</Link>
					</div>
				</section>
			</article>
		</main>
	);
}

export default MainPage;
