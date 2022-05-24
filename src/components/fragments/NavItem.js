import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className={'menu-nav-item' + (props.opened ? ' opened' : '') + (props.active === props.to ? ' active' : '')}>
            <Link to={props.to} className="text-link menu-nav-link" onClick={props.click}>
                {props.label}
            </Link>
        </li>
    )
}

export default NavItem;