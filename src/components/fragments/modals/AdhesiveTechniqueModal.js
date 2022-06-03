import React from 'react';
import Modal from '../Modal';

const AdhesiveTechniqueModal = (props) => {
    return (
        <Modal
            title="Technika adhezyjna"
            hook={props.hook}
        >
            <p>
                Jest to <b>najnowocześniejsza technologicznie metoda</b> połączenia porcelanowego
                uzupełnienia protetycznego (licówki, wkładów koronowych) z zębem, za pomocą dwufazowego
                systemu bondingowego (łączącego).
            </p>
            <p>
                Po utwardzeniu lampą polimeryzacyjną tworzy on
                ścisły konglomerat z zębem i porcelaną, odporny na siły powstające podczas żucia i
                gwarantujący wieloletnie komfortowe użytkowanie odbudowy zęba.
            </p>
        </Modal>
    );
};

export default AdhesiveTechniqueModal;