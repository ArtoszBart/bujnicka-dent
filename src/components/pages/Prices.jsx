import { useState } from 'react';
import ParallaxBaner from '../fragments/ParallaxBanner';
import TabNavItem from '../fragments/tabs/TabNavItem';
import TabContent from '../fragments/tabs/TabContent';
import CekaModal from '../fragments/modals/CekaModal';
import PillarToothModal from '../fragments/modals/PillarToothModal';
import useModal from '../fragments/customHooks/useModal';
import usePrices from '../fragments/prices/usePrices';

function Prices() {
	const [activeTab, setActiveTab] = useState(0);
	const UseModal = useModal();
	const { prices, isfetched } = usePrices();

	return (
		<main className='page-wrapper' role='main'>
			<ParallaxBaner id='prices' text='Cennik' />
			<article className='page-content'>
				{prices && isfetched ? (
					<>
						<ul className='tabs-nav'>
							{prices.map((category, key) => {
								return (
									<TabNavItem
										title={category.title}
										activeTab={activeTab}
										setActiveTab={setActiveTab}
										key={key}
										id={key}
									/>
								);
							})}
						</ul>

						<TabContent prices={prices[activeTab]} />
					</>
				) : (
					<h2>Ładowanie...</h2>
				)}

				<CekaModal hook={UseModal} />
				<PillarToothModal hook={UseModal} />
			</article>
		</main>
	);
}

export default Prices;
