import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

function Navigation() {
	const [opened, setOpened] = useState(false);

	const handleBurgerClick = () => {
		if (!opened) {
			setOpened(true);
		} else {
			setOpened(false);
		}
	}

	const handleNavItemClick = () => {
		setOpened(false);
	}

	return (
		<div className="menu">
			<div className="menu-btn" onClick={handleBurgerClick}>
				<span className={'menu-btn-burger' + (opened ? ' opened' : '')}></span>
			</div>

			<nav className={'nav' + (opened ? ' opened' : '')} aria-label="primary">
				<ul className={'menu-nav' + (opened ? ' opened' : '')}>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/about"
						label="O nas"
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/offer"
						label="Oferta"
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/prices"
						label="Cennik"
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/certificates"
						label="Certyfikaty"
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/faq"
						label="FAQ"
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to="/contact"
						label="Kontakt"
						click={handleNavItemClick}
					/>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation