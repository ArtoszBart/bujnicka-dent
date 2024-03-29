import React, { useState } from 'react';
import NavItem from './NavItem';

function Navigation() {
	const [opened, setOpened] = useState(false);

	const handleBurgerClick = () => {
		if (!opened) {
			setOpened(true);
		} else {
			setOpened(false);
		}
	};

	const handleNavItemClick = () => {
		setOpened(false);
	};

	return (
		<div className='menu'>
			<div className='menu-btn' onClick={handleBurgerClick}>
				<span
					className={'menu-btn-burger' + (opened ? ' opened' : '')}
				></span>
			</div>

			<nav
				className={'nav' + (opened ? ' opened' : '')}
				aria-label='primary'
			>
				<ul className={'menu-nav' + (opened ? ' opened' : '')}>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/o-nas'
						label='O nas'
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/oferta'
						label='Oferta'
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/cennik'
						label='Cennik'
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/certyfikaty'
						label='Certyfikaty'
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/czesto-zadawane-pytania'
						label='FAQ'
						click={handleNavItemClick}
					/>
					<NavItem
						opened={opened}
						setOpened={setOpened}
						to='/kontakt'
						label='Kontakt'
						click={handleNavItemClick}
					/>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
