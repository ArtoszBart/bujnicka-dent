import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	const [open, setOpen] = useState(false);

	return (
		<div className="menu">
			<div className="menu-btn" onClick={() => {
				if (!open) {
					setOpen(true);
				} else {
					setOpen(false);
				}
			}}>
				<span className={'menu-btn-burger' + (open ? ' open' : '')}></span>
			</div>

			<nav className={'nav' + (open ? ' open' : '')} aria-label="primary">
				<ul className={'menu-nav' + (open ? ' open' : '')}>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/about" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							O nas
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/offer" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Oferta
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/prices" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Cennik
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/certificates" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Certyfikaty
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/faq" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							FAQ
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="/contact" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation