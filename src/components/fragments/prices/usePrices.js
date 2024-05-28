import { useEffect, useState } from 'react';
import axios from 'axios';

const usePrices = () => {
	const [prices, setPrices] = useState();
	const [isfetched, setIsfetched] = useState(false);

	useEffect(() => {
		axios
			.get(`https://bujnicka-dent.pl/api/prices`)
			.then((res) => {
				setIsfetched(true);
				setPrices(res.data);
			})
			.catch((err) => {
				setIsfetched(false);
			});
	}, []);

	return { prices, isfetched };
};

export default usePrices;
