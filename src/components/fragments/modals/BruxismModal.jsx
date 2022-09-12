import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const BruxismModal = (props) => {
<<<<<<< HEAD
    return (
        <Modal
            title="Bruksizm"
            hook={props.hook}
        >
            <p>
                Nieprawidłowa aktywność (parafunkcjonalna) narządu żucia, czyli występująca oprócz żucia, mowy i połykania.
                Odbywa się przeważnie na poziomie nieuświadomionym w postaci pojedyńczego epizodu zaciśnięcia i zgrzytnięcia zębów lub
                rytmicznych skurczów mięśni żucia prowadzących do serii zgrzytnięć.
            </p>
            <p>
                Występuje zarówno w ciągu dnia jak i w czasie snu.
                Ma podłoże psychologiczne wynikające z napięć emocjonalnych i sytuacji stresowych.
            </p>
            <p>
                Bruksizm manifestuje się obecnością na zębach startych powierzchni w postaci niewielkich, płaskich, lśniących fragmentów
                nieodpowiadających ich morfologii.
            </p>
            <p>
                Do leczenia bruksizmu wykorzystuje się szyny relaksacyjne ( patrz LECZENIE STAWÓW SKRONIOWO-ŻUCHWOWYCH).
                Może również wystąpić konieczność leczenia farmakologicznego przy zaburzeniach psychologicznych.
            </p>
        </Modal>
    );
=======
	return (
		<>
			{props.hook.openedModal === 'Bruksizm' && (
				<Modal title='Bruksizm' hook={props.hook}>
					<p>
						Nieprawidłowa aktywność narządu żucia. Odbywa się przeważnie na poziomie nieuświadomionym w postaci zaciskania lub
						zgrzytania zębami.
					</p>
					<p>
						Występuje zarówno w ciągu dnia jak i w czasie snu. Ma podłoże psychologiczne wynikające z napięć emocjonalnych i
						sytuacji stresowych. Manifestuje się obecnością na zębach startych powierzchni w postaci niewielkich, płaskich,
						lśniących fragmentów, nieodpowiadających ich morfologii.
					</p>
					<p>
						Do leczenia bruksizmu wykorzystuje się{' '}
						<Link className='text-link' id={props.hook.modalClosingId} to={'/offer/joints'}>
							szyny relaksacyjne
						</Link>
						.
					</p>
				</Modal>
			)}
		</>
	);
>>>>>>> 989e3494dc7cb4f32ef569bc75d1edf7d763c86d
};

export default BruxismModal;
