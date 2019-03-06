import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
             
            <li className="navbar-brand">
                <NavLink exact to="/"  className="nav-link">Frontpage</NavLink>
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


        </ul>
    )
}

export default NavLinks;