import '../../styles/main.scss';
import CarPhoto from '../../img/samochut.jpg';

function Offer() {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="about">
				<div className="banner-title">
					<h1>Oferta</h1>
				</div>
			</div>
			<section className="page-content">
				<p className="center">
					Tu będzie jakiś tekst generalnie o usługach.
					Fajnie było by tu dodać że specjalizuje się w ratowaniu zębów,
					które inni lekarze spisali na straty :)
				</p>
				<div className="offers">
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
							Cras lacinia augue sed mi vestibulum rhoncus.
							Praesent fringilla purus lorem, sit amet lobortis tortor fermentum vitae.
							Donec maximus odio finibus quam posuere, sit amet placerat dolor accumsan.
							Etiam arcu ante, efficitur at finibus a, vulputate quis est. Cras porttitor mauris tellus.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
							Cras lacinia augue sed mi vestibulum rhoncus.
							Praesent fringilla purus lorem, sit amet lobortis tortor fermentum vitae.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
							Cras lacinia augue sed mi vestibulum rhoncus.
							Praesent fringilla purus lorem, sit amet lobortis tortor fermentum vitae.
							Donec maximus odio finibus quam posuere, sit amet placerat dolor accumsan.
							Etiam arcu ante, efficitur at finibus a, vulputate quis est. Cras porttitor mauris tellus.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
					<div className="offers-single">
						<img src={CarPhoto} alt="" />
						<h3>Lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam euismod ante sit amet congue elementum.
							Cras lacinia augue sed mi vestibulum rhoncus.
							Praesent fringilla purus lorem, sit amet lobortis tortor fermentum vitae.
						</p>
						<a href="!#" className="button">Zobacz więcej</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Offer;
