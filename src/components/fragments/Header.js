import React, { useState } from "react"
import Navigation from './Navigation';
import logo from './../../img/logo.png';

function Header() {
	const [navbar, setNavbar] = useState(false);

	const changeNavbar = () => {
		if (window.scrollY >= 149) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeNavbar);

	return (
		<header>
			<div className={'header-container' + (navbar ? ' active' : '')}>
				<div className="logo">
					<a href="/">
						<img src={logo} alt="logo" />
					</a>
				</div>
				<Navigation />
			</div>
		</header>
	)
}

export default Header