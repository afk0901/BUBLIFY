import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">

            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Front Page</NavLink>
            </li>
            
            <li className="nav-item">
                 <NavLink exact to="/bubbles" className="nav-link" >Products</NavLink>
            </li>

            <li className="nav-item">
                 <NavLink exact to="/Bundles" className="nav-link">Bundles</NavLink>
            </li>

            <li className="nav-item">
                <NavLink exact to="/About" className="nav-link">About Us</NavLink>
            </li>

            <li className="nav-item">
                 <NavLink exact to="/cart" className="nav-link"><i className="fas fa-shopping-cart" data-toggle="tooltip" title="View cart"></i></NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;