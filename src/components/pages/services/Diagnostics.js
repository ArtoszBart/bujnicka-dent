import '../../../styles/main.scss';

function Diagnostics() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="diagnostics">
				<div className="banner-title">
					<h1>Wizyta Diagnostyczna</h1>
				</div>
			</div>
			<section className="page-content">
				<article>
					<p>
						Przychodząc do gabinetu stomatologicznego, często tylko wtedy,
						gdy "coś dzieje się z zębem", skupiamy się na rozwiązaniu tylko tego jednego problemu.
						Dzięki dokładnemu badaniu klinicznemu, <b>bezpłatna wizyta diagnostyczna</b> umożliwia
						zapoznanie się z sytuacją dotyczącą wszystkich zębów.
					</p>
					<p>Zakończona jest przekazaniem w formie pisemnej Diagramu leczenia, który zawiera następujące informacje:</p>
					<ul>
						<li>plan leczenia zachowawczego</li>
						<li>możliwość "poprawienia uśmiechu" (patrz: Stomatologia Cyfrowa)</li>
						<li>projekt zmiany relacji zwarciowych ( mają one bardzo duży wpływ na zdrowie ogólne, np. występowanie migren )</li>
						<li>1-3 projekty uzupełnienia braków zębowych</li>
						<li>wstępną symulację finansową</li>
					</ul>
					<p>
						<b>Bezpłatna wizyta diagnostyczna</b> daje wiedzę na temat zębów i całego narządu żucia już na pierwszej wizycie!
					</p>
				</article>
			</section>
		</main >
	);
}

export default Diagnostics;
