import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const BruxismModal = (props) => {
	return (
		<>
			{props.hook.openedModal === 'Bruksizm' && (
				<Modal title='Bruksizm' hook={props.hook}>
					<p>
						Nieprawidłowa aktywność narządu żucia. Odbywa się przeważnie na poziomie nieuświadomionym w postaci zaciskania lub
						zgrzytania zębami.
					</p>
					<p>Występuje zarówno w ciągu dnia jak i w czasie snu.</p>
					<p>
						Przyczyną wzmożonej aktywności parafunkcjonalnej mogą być przedwczesne kontakty zwarciowe, powodujące nadmierną
						aktywność mięśniową. Są one odczuwane jako jako przeszkody na drodze zębów, a typową odpowiedzią organizmu jest
						uaktywnienie układu mięśniowego w celu pozbycia się czynnika zaburzającego.
					</p>
					<p>
						Do leczenia bruksizmu wykorzystuje się{' '}
						<Link className='text-link' to={'/offer/joints'}>
							szyny relaksacyjne
						</Link>
						.
					</p>
				</Modal>
			)}
		</>
	);
};

export default BruxismModal;
