import React from 'react';
import Modal from '../Modal';
import PolymerisationImg from '../../../img/texts/conservatives/polymerisation.jpeg';

const PolymerizationModal = (props) => {
	return (
		<>
			{props.hook.openedModal === 'Polimeryzacja' && (
				<Modal title='Polimeryzacja' hook={props.hook}>
					<div className='text-img upright'>
						<div>
							<div className='photos'>
								<div className='page-photo'>
									<img src={PolymerisationImg} alt='' />
								</div>
							</div>
							<p>
								Proces <b>utwardzania materiałów kompozytowych</b> służących do odbudowy utraconych tkanek zęba. Przebiega on pod
								wpływem <b>światła widzialnego lub ultrafioletowego</b>.
							</p>
							<p>
								W przeciwieństwie do kompozytów utwardzanych na drodze reakcji chemicznej polimeryzacja kompozytów
								światłoutwardzalnych <b>niweluje konieczność czekania</b> na możliwość jedzenia po wykonaniu wypełnienia.
							</p>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default PolymerizationModal;
