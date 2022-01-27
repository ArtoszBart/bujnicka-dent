import React from "react"
import Navigation from './Navigation';
import logo from './../../img/logo.png';

function Header() {
	return (
		<header>
			<div className="header-container">
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