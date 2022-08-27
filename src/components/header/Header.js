import React, { Component } from "react";
import Nav from "./Nav";

import './Header.css';

class Header extends Component {
    state = {
        navLink: [
            {
                to: '/',
                name: 'Home'
            },
            {
                to: 'about_us',
                name: 'About us'
            },
            {
                to: 'shop',
                name: 'Shop'
            },
            {
                to: 'pagest',
                name: 'Pagest'
            },
            {
                to: 'contact_us',
                name: 'Contact us'
            }
        ]
    }

    render = () => {

        const { navLink } = this.state;

        return (
            <>
                <nav>
                    <Nav navLink={navLink}/>
                </nav>
            </>
        )
    }
}

export default Header;
