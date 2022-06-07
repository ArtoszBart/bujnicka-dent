import { Link } from 'react-router-dom';

const About = () => {

	return (
		<main className="page-wrapper" role="main">
			<div className="banner" id="not-found">
				<div className="banner-title">
					<h1><i>404</i></h1>
				</div>
			</div>
			<article className="page-content">
				<h2>Niestety nie znaleziono tej strony.</h2>
				<Link className="button" to={"/"}>Wróć do strony głównej</Link>
			</article>
		</main>
	);
};

export default About;
