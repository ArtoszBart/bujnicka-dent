import { useState } from 'react';
import ParallaxBaner from '../fragments/ParallaxBanner';
import TabNavItem from '../fragments/tabs/TabNavItem';
import TabContent from '../fragments/tabs/TabContent';
import SinglePrice from '../fragments/prices/SinglePrice';
import MultiplePrices from '../fragments/prices/MultiplePrice';
import CekaModal from '../fragments/modals/CekaModal';
import PillarToothModal from '../fragments/modals/PillarToothModal';
import useModal from '../fragments/customHooks/useModal';

function Prices() {
	const [activeTab, setActiveTab] = useState(0);
	const UseModal = useModal();

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='prices' text='Cennik' />
			<article className='page-content'>
				<ul className='tabs-nav'>
					<TabNavItem
						title='Podstawowe usługi'
						id={0}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Profilaktyka'
						id={1}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Stom. estetyczna'
						id={2}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Stom. zachowawcza'
						id={3}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Endodoncja'
						id={4}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Periodontologia'
						id={5}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Protetyka'
						id={6}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Implanty'
						id={7}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Chirurgia'
						id={8}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title='Leczenie stawów'
						id={9}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</ul>

				<TabContent id={0} activeTab={activeTab}>
					<h2>Podstawowe usługi</h2>
					<SinglePrice
						name='Wizyta diagnostyczna'
						price='bezpłatnie'
					/>
					<SinglePrice name='Wizyta kontrolna' price='bezpłatnie' />
					<SinglePrice name='Konsultacja' price='bezpłatnie' />
					<SinglePrice
						name='Znieczulenie (również na życzenie pacjenta)'
						price='50 zł'
					/>
				</TabContent>

				<TabContent id={1} activeTab={activeTab}>
					<h2>Profilaktyka</h2>
					<SinglePrice
						name='Scaling i likwidacja osadu (higienizacja)'
						price='150-400 zł'
					/>
					<SinglePrice
						name='Fluoryzacja (lakierowanie)'
						price='160 zł'
					/>
					<SinglePrice name='Lakowanie (1 ząb)' price='180 zł' />
				</TabContent>

				<TabContent id={2} activeTab={activeTab}>
					<h2>Stomatologia estetyczna</h2>
					<SinglePrice
						name='Wybielanie metodą nakładkową (dotyczy zębów żywych)'
						price='1500 zł'
					/>
					<MultiplePrices
						title='Wybielanie metodą dokomorową (dotyczy zębów martwych)'
						names={['Pierwsza wizyta', 'Każda następna wizyta']}
						prices={['250 zł', '200 zł']}
					/>
					<MultiplePrices
						title='Onlay lub Inlay'
						names={['Kompozytowy', 'Porcelanowy']}
						prices={['1000 zł', '1300 zł']}
					/>
					<SinglePrice
						name='Wypełnienie estetyczne'
						price='350-400 zł'
					/>
					<SinglePrice name='Licówka' price='1800 zł' />
				</TabContent>

				<TabContent id={3} activeTab={activeTab}>
					<h2>Stomatologia zachowawcza</h2>
					<SinglePrice
						name='Leczenie biologiczne miazgi'
						price='260 zł'
					/>
					<SinglePrice
						name='Wypełnienia (Plomby)'
						price='180-550 zł'
					/>
					<MultiplePrices
						title='Onlay lub Inlay'
						names={['Kompozytowy', 'Porcelanowy']}
						prices={['1000 zł', '1300 zł']}
					/>
				</TabContent>

				<TabContent id={4} activeTab={activeTab}>
					<h2>Endodoncja</h2>
					<MultiplePrices
						title='Leczenie kanałowe zęba'
						names={[
							'1-kanałowego',
							'2-kanałowego',
							'3-kanałowego',
							'4-kanałowego',
						]}
						prices={['700 zł', '1000 zł', '1300 zł', '1600 zł']}
					/>
					<aside>
						Cena leczenia kanałowego uzależniona jest od stopnia
						zaawansowania oraz przebiegu choroby. Powyższe ceny
						dotyczą leczenia bez powikłań.
					</aside>
				</TabContent>

				<TabContent id={5} activeTab={activeTab}>
					<h2>Periodontologia</h2>
					<SinglePrice
						name='Scaling i likwidacja osadu'
						price='150-400 zł'
					/>
					<SinglePrice name='Kiretaż' price='200-500 zł' />
				</TabContent>

				<TabContent id={6} activeTab={activeTab}>
					<h2>Protetyka</h2>
					<SinglePrice
						name='Wkład koronowo-korzeniowy'
						price='500-800 zł'
					/>
					<SinglePrice
						name='Korona estetyczna'
						price='1500-1800 zł'
					/>
					<SinglePrice
						name='Most (cena za jeden ząb w moście)'
						price='1300-1500 zł'
					/>
					<SinglePrice
						name='Most teleskopowy (cena przybliżona za 1 ząb filarowy)'
						price='3500 zł'
					/>
					<SinglePrice
						name='Proteza akrylowa (za jeden punkt w protezie)'
						price='180 zł'
					/>
					<SinglePrice name='Proteza całkowita' price='2500 zł' />
					<SinglePrice name='Proteza szkieletowa' price='2750 zł' />
					<SinglePrice
						name='Proteza bezklamrowa z zamkami typu CEKA'
						price='od 5000 zł'
						star
					/>
					<SinglePrice
						name='Proteza bezklamrowa z ryglem'
						price='od 3500 zł'
						star
					/>
					<MultiplePrices
						title='Onlay lub Inlay'
						names={['Kompozytowy', 'Porcelanowy']}
						prices={['1000 zł', '1300 zł']}
					/>
					<dd>
						* Konieczna jest wycena indywidualna pracy protetycznej.
					</dd>
					<dd>
						**{' '}
						<span
							className='text-link'
							onClick={() => UseModal.openModal('Ząb filarowy')}
						>
							Ząb filarowy
						</span>
					</dd>
					<dd>
						***{' '}
						<span
							className='text-link'
							onClick={() =>
								UseModal.openModal(
									'Proteza bezklamrowa z zamkami typu CEKA'
								)
							}
						>
							Proteza bezklamrowa z zamkami typu CEKA
						</span>
					</dd>
				</TabContent>

				<TabContent id={7} activeTab={activeTab}>
					<h2>Implanty</h2>
					<SinglePrice
						name='Implant (Część chirurgiczna)'
						price='3000 zł'
					/>
					<SinglePrice
						name='Implant (Część protetyczna)'
						price='3000 zł'
					/>
				</TabContent>

				<TabContent id={8} activeTab={activeTab}>
					<h2>Chirurgia</h2>
					<SinglePrice
						name='Ekstrakcja (usunięcie) zęba'
						price='300 zł'
						star
					/>
					<SinglePrice name='Ekstrakcja złożona' price='400 zł' />
					<SinglePrice name='Szycie zębodołu' price='100 zł' />
					<dd>
						* W przypadku jednoczesnej ekstrakcji kilku zębów,
						kolejny ząb - 100 zł
					</dd>
				</TabContent>

				<TabContent id={9} activeTab={activeTab}>
					<h2>Choroby stawów skroniowo-żuchwowych</h2>
					<SinglePrice name='Szyna relaksacyjna' price='od 550 zł' />
				</TabContent>

				<CekaModal hook={UseModal} />
				<PillarToothModal hook={UseModal} />
			</article>
		</main>
	);
}

export default Prices;
