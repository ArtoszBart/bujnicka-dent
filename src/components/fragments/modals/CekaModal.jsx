import React from 'react';
import Modal from '../Modal';
import CekaImg from '../../../img/texts/prosthodontics/hasp_denture.jpeg';

const CekaModal = (props) => {
    return (
        <Modal
            title="Proteza bezklamrowa z zamkami typu CEKA"
            hook={props.hook}
        >
            <div className="text-img upright">
                <div>
                    <div className="photos">
                        <div className="page-photo">
                            <img src={CekaImg} alt="" />
                        </div>
                    </div>
                    <p>
                        Proteza szkieletowa, w której rolę klamer, czyli elementów utrzymujących protezę, pełnią <b>zamki np. typu CEKA</b>.
                        Po założeniu protezy do ust, jak i przy uśmiechu, <b>zamki są niewidoczne</b>, ponieważ schowane są wewnątrz protezy.
                    </p>
                    <p>
                        Warunkiem do wykonania takiej protezy jest zblokowanie dwoma koronami protetycznymi z każdej strony ostatnich zębów własnych pacjenta.
                        Zęby te przejmują rolę utrzymania protezy.
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default CekaModal;