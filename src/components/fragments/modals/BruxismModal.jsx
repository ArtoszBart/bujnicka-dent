import React from 'react';
import Modal from '../Modal';

const BruxismModal = (props) => {
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
};

export default BruxismModal;