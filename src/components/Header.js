import React from 'react';
import logo from '../assets/ij300backRemove.png';
import { NavLink } from 'react-router-dom';
import '../components/Header.css';

function Header() {
    return (
        <div className="header">
           <div className="header__container">
                <div className="header__nameContainer">
                    <img src={logo} alt="Minimalistic style of logo Ibrokhim Jalalov" className="header__logo"/>
                    <span className="header__name">ibrokhim jalalov</span>
                </div>
                <ul className="header__navigation">
                    <li className="header__navItem"><NavLink rel="author" title="Main" type="Page" aria-readonly exact activeClassName="current" to="/" className="header__navLink">Home</NavLink></li>
                    <li className="header__navItem"><NavLink rel="alternate" title="About" type="Page" aria-readonly exact activeClassName="current" to="about" className="header__navLink" >About Ibrokhim</NavLink></li>
                    <li className="header__navItem"><NavLink rel="author" title="Showcase" type="Page" exact activeClassName="current" to="/showcase" className="header__navLink">Showcase</NavLink></li>
                    <li className="header__navItem"><NavLink rel="author" title="Contact" type="Page" exact activeClassName="current" to="/reach" className="header__navLink">Reach now</NavLink></li>
                </ul>
           </div>
        </div>
    )
}

export default Header
