import '../../styles/main.scss';

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = '\noparty na rodzinnej tradycji lekarskiej';

	return (
		<div className="main-container">
			<main className="main-page">
				<div className="main-page-device">
					<h1><i>{device1st}</i> {device2nd}</h1>
				</div>
				<a className="button" href="!#">Zapisz się na wizytę</a>
				<a className="scroll-down" href="#section1"><i className="fas fa-chevron-down"></i></a>
			</main>
			<section className="section" id="section1">

			</section>
		</div>
	);
}

export default MainPage;
