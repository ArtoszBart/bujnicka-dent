import React from 'react';
import Modal from '../Modal';

const BruxismModal = (props) => {
	return (
		<>
			{props.hook.openedModal === 'Bruksizm' && (
				<Modal title='Bruksizm' hook={props.hook}>
					<p>
						Nieprawidłowa aktywność (parafunkcjonalna) narządu żucia, czyli występująca oprócz żucia, mowy i połykania. Odbywa się
						przeważnie na poziomie nieuświadomionym w postaci pojedyńczego epizodu zaciśnięcia i zgrzytnięcia zębów lub
						rytmicznych skurczów mięśni żucia prowadzących do serii zgrzytnięć.
					</p>
					<p>
						Występuje zarówno w ciągu dnia jak i w czasie snu. Ma podłoże psychologiczne wynikające z napięć emocjonalnych i
						sytuacji stresowych.
					</p>
					<p>
						Bruksizm manifestuje się obecnością na zębach startych powierzchni w postaci niewielkich, płaskich, lśniących
						fragmentów nieodpowiadających ich morfologii. Przyczyną wzmożonej aktywności parafunkcjonalnej mogą być przedwczesne
						kontakty zwarciowe (kontakty zębów górnych z dolnymi), powodujące nadmierną aktywność mięśniową. Są one odczuwane jako
						jako przeszkody zaburzające równowagę nerwowo-mięśniową, a typową odpowiedzią organizmu jest uaktywnienie układu
						mięśniowego w celu pozbycia się czynnika zaburzającego. Przyczynami powodującymi szukanie pomocy specjalistycznej są:
						- niewytłumaczalny ból zębów lub mięśni - zmęczenie mięśni - znaczne pogorszenie estetyki uzębienia związane z jego
						starciem. Do leczenia bruksizmu wykorzystuje się szyny relaksacyjne ( patrz LECZENIE STAWÓW SKRONIOWO-ŻUCHWOWYCH).
						Może również wystąpić konieczność leczenia farmakologicznego przy zaburzeniach psychologicznych.
					</p>
				</Modal>
			)}
		</>
	);
};

export default BruxismModal;
