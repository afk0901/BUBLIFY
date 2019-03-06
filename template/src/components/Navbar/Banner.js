import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="jumpatron jumbotron-fluid">
        <NavLink exact to="/"><div className="logo"></div></NavLink>
        </div>
        )
    }

export default Banner;