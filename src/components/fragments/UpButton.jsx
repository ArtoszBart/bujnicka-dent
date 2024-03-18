import { useLayoutEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const UpButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		if (window.pageYOffset < 1) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	useLayoutEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`up-btn ${isVisible ? 'active' : ''}`}
			onClick={scrollUp}
		>
			<FaChevronUp />
		</div>
	);
};

export default UpButton;
