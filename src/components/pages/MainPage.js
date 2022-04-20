import { Link } from 'react-router-dom';
import '../../styles/main.scss';

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = 'oparty na rodzinnej tradycji lekarskiej';

	return (
		<main className="main-wrapper page-wrapper" role="main">
			<div className="banner" id="main-page">
				<div className="banner-title">
					<h1 className="device"><i>{device1st}</i> {'\n' + device2nd}</h1>
				</div>
				<Link className="button" to="/appointment">Zapisz się na wizytę</Link>
				{/* <div className="quote"><q>SALUS AEGROTI SUPREMA LEX</q> (dobro chorego najwyższym prawem)<br />
					<q>PRIMUM NON NOCERE</q> (po pierwsze nie szkodzić)<br />
					Hipokrates</div> */}
				<a className="scroll-down" href="#section1"><i className="fas fa-chevron-down"></i></a>
			</div>
			<article className="section" id="section1">

			</article>
		</main>
	);
}

export default MainPage;
