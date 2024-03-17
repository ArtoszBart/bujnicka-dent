import React from 'react';
import Modal from '../Modal';

const CekaModal = (props) => {
	return (
		<>
			{props.hook.openedModal ===
				'Proteza bezklamrowa z zamkami typu CEKA' && (
				<Modal
					title='Proteza bezklamrowa z zamkami typu CEKA'
					hook={props.hook}
				>
					<div className='text-img upright'>
						<div>
							<div className='photos'>
								<div className='page-photo'>
									<img
										src={
											'https://bujnickadentstorage.blob.core.windows.net/bunicka-dent-images/texts/prosthodontics/hasp_denture.jpeg'
										}
										alt='Proteza bezklamrowa'
									/>
								</div>
							</div>
							<p>
								Proteza szkieletowa, w której rolę klamer, czyli
								elementów utrzymujących protezę, pełnią{' '}
								<b>zamki np. typu CEKA</b>. Po założeniu protezy
								do ust, jak i przy uśmiechu,{' '}
								<b>zamki są niewidoczne</b>, ponieważ schowane
								są wewnątrz protezy.
							</p>
							<p>
								Warunkiem do wykonania takiej protezy jest
								zblokowanie dwoma koronami protetycznymi z
								każdej strony ostatnich zębów własnych pacjenta.
								Zęby te przejmują rolę utrzymania protezy.
							</p>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default CekaModal;
