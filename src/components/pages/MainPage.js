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
				<a className="button" href="/appointment">Zapisz się na wizytę</a>
				<a className="scroll-down" href="#section1"><i className="fas fa-chevron-down"></i></a>
			</div>
			<section className="section" id="section1">

			</section>
		</main>
	);
}

export default MainPage;
