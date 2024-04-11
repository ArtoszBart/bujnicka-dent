import { useState } from 'react';
import Navigation from './Navigation';
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
	const [navbar, setNavbar] = useState(false);

	// const changeNavbar = () => {
	// 	if (window.scrollY >= 149) {
	// 		setNavbar(true);
	// 	} else {
	// 		setNavbar(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', changeNavbar);

	// 	return () => window.removeEventListener('scroll', changeNavbar);
	// }, []);

	return (
		<header>
			<div className={'header-container' + (navbar ? ' scrolled' : '')}>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
