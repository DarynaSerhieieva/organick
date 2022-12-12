import React from "react";

import './Footer.scss';

import ContactUs from "./ContactUs";
import SocialNetwork from "./SocialNetwork";
import UtilityPages from "./UtilityPages";

import logo from './../../../img/logo.svg';
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer__contact">
                        <h2 className="footer__title">Contact Us</h2>
                        <ContactUs/>
                    </div>
                    <div className="footer__social">
                        <NavLink to='/'>
                            <img src={logo} alt="logo" width="200" height="56"/>
                        </NavLink>
                        <p className="footer__text">
                            We are a popular and farming company aspiring to be a leader in the Organic food industry.
                        </p>
                        <SocialNetwork/>
                    </div>
                    <div className="footer__utility">
                        <h2 className="footer__title">Utility Pages</h2>
                        <UtilityPages/>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © Organick | Designed by VictorFlow - Powered by Webflow
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
