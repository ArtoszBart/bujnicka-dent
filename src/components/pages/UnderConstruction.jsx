import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxBanner from '../fragments/ParallaxBanner';

const UnderConstruction = () => {
	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBanner id='appointments' text='Strona w trakcie budowy' />
			<article className='page-content'>
				<h2>Odwiedź tą stronę niedługo</h2>
				<Link className='button' to={'/'}>
					Wróć do strony głównej
				</Link>
			</article>
		</main>
	);
};

export default UnderConstruction;
