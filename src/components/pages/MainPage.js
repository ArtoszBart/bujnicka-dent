import { Link } from 'react-router-dom';
import '../../styles/main.scss';
import ParallaxBanner from '../fragments/ParallaxBanner'

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = 'oparty na rodzinnej tradycji lekarskiej';

	return (
		<main className="main-wrapper page-wrapper" role="main">
			<ParallaxBanner id="main-page" text={device1st} text2={'\n' + device2nd}>
				<Link className="button" to="/appointment">Zapisz się na wizytę</Link>
				<a className="scroll-down" href="#section1"><i className="fas fa-chevron-down"></i></a>
			</ParallaxBanner>
			<article className="section" id="section1">

			</article>
		</main>
	);
}

export default MainPage;
