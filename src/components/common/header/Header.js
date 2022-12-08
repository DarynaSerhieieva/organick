import React from "react";
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import ButtonCart from './ButtonCart';

import './Header.scss';

import logo from './../../../img/logo.svg';

const Header = () => {

    return (
        <>
            <header className="wrapper">
                <div className="header">
                    <div className="logo">
                    <NavLink to='/'>
                        <img src={logo} alt="logo" width="200" height="56"/>
                    </NavLink>
                    </div>
                    <nav>
                        <Navigation/>
                    </nav>
                    <ButtonCart/>
                </div>
            </header>
        </>
    )
}

export default Header;
