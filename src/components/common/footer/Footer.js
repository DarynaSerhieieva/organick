import React from "react";

import './Footer.scss';

import ContactUs from "./ContactUs";
import SocialNetwork from "./SocialNetwork";
import UtilityPages from "./UtilityPages";

import logo from './../../../img/logo.svg';

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
                        <img src={logo} alt="logo"/>
                        <p>
                            We are a popular and farming company aspiring to be a leader in the Organic food industry.
                        </p>
                        <SocialNetwork/>
                    </div>
                    <div className="footer__utility">
                        <h2 className="footer__title">Utility Pages</h2>
                        <UtilityPages/>
                    </div>
                </div>
                
            </footer>
        </>
    );
};

export default Footer;
