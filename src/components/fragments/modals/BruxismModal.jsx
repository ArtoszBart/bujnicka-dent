import React from 'react';
import Modal from '../Modal';
import { Link, useLocation } from 'react-router-dom';

const BruxismModal = (props) => {
	const location = useLocation();

	return (
		<>
			{props.hook.openedModal === 'Bruksizm' && (
				<Modal title='Bruksizm' hook={props.hook}>
					<p>
						Nieprawidłowa aktywność narządu żucia. Odbywa się
						przeważnie na poziomie nieuświadomionym w postaci
						zaciskania lub zgrzytania zębami.
					</p>
					<p>
						Występuje zarówno w ciągu dnia jak i w czasie snu. Ma
						podłoże psychologiczne wynikające z napięć emocjonalnych
						i sytuacji stresowych. Manifestuje się obecnością na
						zębach startych powierzchni w postaci niewielkich,
						płaskich, lśniących fragmentów, nieodpowiadających ich
						morfologii.
					</p>
					<p>
						Do leczenia bruksizmu wykorzystuje się{' '}
						{!location.pathname.includes('stawow') ? (
							<Link
								className='text-link'
								id={props.hook.modalClosingId}
								to={
									'/oferta/leczenie-stawow-skroniowo-zuchwowych#relaxation-rails'
								}
							>
								szyny relaksacyjne
							</Link>
						) : (
							<>szyny relaksacyjne</>
						)}
						.
					</p>
				</Modal>
			)}
		</>
	);
};

export default BruxismModal;
