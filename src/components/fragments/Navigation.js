import React, { useState } from 'react';
import { Link } from 'react-router-dom'

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

			<nav className={'nav' + (open ? ' open' : '')}>
				<ul className={'menu-nav' + (open ? ' open' : '')}>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							O nas
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Oferta
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Cennik
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Ciekawostki
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Galeria
						</Link>
					</li>
					<li className={'menu-nav-item' + (open ? ' open' : '')}>
						<Link to="!#" className="text-link menu-nav-link" onClick={() => setOpen(false)}>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation