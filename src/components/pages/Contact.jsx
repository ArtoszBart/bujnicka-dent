import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../fragments/forms/ContactForm';
import ParallaxBaner from '../fragments/ParallaxBanner';

function Contact() {
	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='contact' text='Kontakt' />
			<article className='page-content'>
				<section className='contact'>
					<div className='contact-info'>
						<h3>Bujnicka-Dent</h3>
						<address>
							Gabinet Stomatologiczny Magdalena Bujnicka
							<br />
							ul. Hansa Christiana Andersena 6<br />
							01-911 Warszawa
							<br />
							<a className='text-link' href='#map'>
								Zobacz na mapie
							</a>
							<br />
							<a className='text-link' href='tel:+48609606814'>
								+48 609-606-814
							</a>
							<br />
							<a
								className='text-link'
								href='mailto:magdalena.bujnicka@gmail.com'
							>
								magdalena.bujnicka@gmail.com
							</a>
						</address>
						<Link to='/appointment' className='button'>
							Zapisz się na wizytę
						</Link>
					</div>
					<ContactForm />
				</section>

				<section className='map-container' id='map'>
					<h3>Jak do nas trafić</h3>
					<iframe
						className='map'
						title='map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19526.233593659086!2d20.931493567993382!3d52.283710439202004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca33cc1b06f3%3A0xa69120edf8e6db80!2sHansa%20Christiana%20Andersena%206%2C%2001-911%20Warszawa!5e0!3m2!1spl!2spl!4v1644072280081!5m2!1spl!2spl'
						loading='lazy'
					></iframe>
				</section>
			</article>
		</main>
	);
}

export default Contact;
