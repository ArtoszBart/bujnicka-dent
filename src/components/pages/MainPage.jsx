import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ParallaxBanner from '../fragments/ParallaxBanner'

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
				<Link className="scroll-down" to="/" onClick={handleScroll}><i className="fas fa-chevron-down"></i></Link>
				<div className="quote">
					<q>Salus aegroti suprema lex</q>
					<p>Dobro chorego najwyższym prawem</p>
					<p className="author">~Hipokrates</p>
				</div>
			</ParallaxBanner>
			<article className="section" id="section1" ref={articleRef}>

			</article>
		</main>
	);
}

export default MainPage;
