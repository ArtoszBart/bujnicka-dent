import { Link } from 'react-router-dom';
import '../../../styles/main.scss';

function Diagnostics() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="diagnostics">
				<div className="banner-title">
					<h1>Wizyta Diagnostyczna</h1>
				</div>
			</div>
			<article className="page-content">
				{/* <p>Przychodząc do gabinetu stomatologicznego, często tylko wtedy,gdy coś wydarzy się z Twoim zębem,
					skupiasz się na rozwiązaniu tego jednego problemu, może być inaczej...
					Proponuję Ci BEZPŁATNĄ WIZYTĘ DIAGNOSTYCZNĄ, na której dowiesz się, co dzieje się z Twoimi wszystkimi zębami.
				</p>
				<p>
					Wykorzystując badanie kliniczne oraz diagnostykę rentgenowską zostaniesz dokładnie zbadany i otrzymasz w formie pisemnej:
				</p>
				<ul>
					<li>Plan leczenia</li>
					<li>Wstępną symulację finansową</li>
					<li>1-3 projekty uzupełnienia braków zębowych</li>
					<li>
						Często można też polepszyć wygląd Twojego uśmiechu,
						stosując komputerowe projektowanie uśmiechu i nowoczesne
						rozwiązania estetyczne - na wizycie diagnostycznej otrzymasz informację
					</li>
					<li>
						Coraz częściej też obserwuję konieczność poprawienia warunków zwarciowych w jamie ustnej,
						które są pomijane, a mają bardzo duży wpływ na zdrowie ogólne, np.występowanie migren.
					</li>
				</ul>
				<p>
					Korzystając z takiej wizyty, zyskujesz wiedzę na temat swoich zębów oraz całego narządu żucia.
					Możesz też łatwiej zaplanować swoje finanse.
				</p>

				<h2>PRZEROBIONA WERSJA:</h2> */}

				<p>
					Przychodząc do gabinetu stomatologicznego, często tylko wtedy,
					gdy "coś dzieje się z zębem", skupiamy się na rozwiązaniu tylko tego jednego problemu.
					Dzięki dokładnemu badaniu klinicznemu, <b>bezpłatna wizyta diagnostyczna</b> umożliwia
					zapoznanie się z sytuacją dotyczącą wszystkich zębów.
				</p>
				<p>Wizyta zakończona jest przekazaniem w formie pisemnej Diagramu leczenia, który zawiera następujące informacje:</p>
				<ul>
					<li>plan leczenia zachowawczego</li>
					<li>możliwość "<Link to="" className="text-link">poprawienia uśmiechu</Link>"</li>
					<li>projekt zmiany relacji zwarciowych (mają one bardzo duży wpływ na zdrowie ogólne, np. występowanie migren)</li>
					<li>1-3 projektów uzupełnienia braków zębowych</li>
					<li>wstępną symulację finansową</li>
				</ul>
				<p><b>Bezpłatna wizyta diagnostyczna</b> daje wiedzę na temat zębów i całego narządu żucia już na pierwszej wizycie!</p>
			</article>
		</main >
	);
}

export default Diagnostics;
