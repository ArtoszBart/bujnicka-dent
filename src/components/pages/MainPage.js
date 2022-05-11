import { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import '../../styles/main.scss';
import ParallaxBanner from '../fragments/ParallaxBanner'
import Modal from '../fragments/Modal';
import CarPhoto from '../../img/samochut.jpg';

function MainPage() {
	const device1st = 'Autorski gabinet stomatologiczny';
	const device2nd = 'oparty na rodzinnej tradycji lekarskiej';
	const [isModalOpen, setIsModalOpen] = useState(false);

	const clicked = () => {
		setIsModalOpen(true);
	}

	return (
		<main className="main-wrapper page-wrapper" role="main">
			<ParallaxBanner id="main-page" text={device1st} text2={'\n' + device2nd}>
				<Link className="button" to="/appointment">Zapisz się na wizytę</Link>
				<a className="scroll-down" href="#section1"><i className="fas fa-chevron-down"></i></a>
				<div className="quote">
					<q>Salus aegroti suprema lex</q>
					<p>Dobro chorego najwyższym prawem</p>
					<p className="author">~Hipokrates</p>
				</div>
			</ParallaxBanner>
			<article className="section" id="section1">
				<button onClick={clicked}>Clikck</button>
				{

					<Modal
						title='Technika adhezyjna'
						image={CarPhoto}
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
					>
						Jest to najnowocześniejsza technologicznie metoda połączenia porcelanowego
						uzupełnienia protetycznego (licówki, wkładów koronowych) z zębem, za pomocą dwufazowego
						systemu bondingowego (łączącego). Po utwardzeniu lampą polimeryzacyjną tworzy on
						ścisły konglomerat z zębem i porcelaną, odporny na siły powstające podczas żucia i
						gwarantujący wieloletnie komfortowe użytkowanie odbudowy zęba.
					</Modal>
				}
			</article>
		</main>
	);
}

export default MainPage;
