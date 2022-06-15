import React from 'react';
import Modal from '../Modal';

const PillarToothModal = (props) => {
	return (
		<>
			{props.hook.openedModal === 'Ząb filarowy' && (
				<Modal title='Ząb filarowy' hook={props.hook}>
					<p>
						Do stworzenia mostu potrzebne są <b>2 miejsca podparcia</b> więc zęby sąsiadujące z dziurą stają się{' '}
						<b>filarami mostu - zębami filarowymi</b>.
					</p>
					<p>
						Most jest uzupełnieniem protetycznym wykonywanym w przypadku tzw. braku międzyzębowego, czyli gdy miejsce braku zęba,
						ma obok inne zęby. Są one kluczowe w wykonaniu mostu, będąc tzw. <b>zębami filarowymi</b>.
					</p>
				</Modal>
			)}
		</>
	);
};

export default PillarToothModal;
