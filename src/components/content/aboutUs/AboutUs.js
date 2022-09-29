import React from "react";

import Advantages from "./Advantages";

import citrus from './img/citrus.png';

import './AboutUs.scss';

export const AboutUs = () => {

    return (
        <>
            <section className="about-us">
                <div className="wrapper about-us__section">
                    <div className="about-us__img">
                        <img src={citrus} alt="citrus"/>
                    </div>
                    <div className="about-us__content">
                        <h2 className="about-us__name">About Us</h2>
                        <h2 className="about-us__title">We Believe in Organic Foods For Strong Health</h2>
                        <p className="about-us__text">
                            Welcome to the world of natural and organic. Here you can discover the
                            bounty of nature. We have grown on the principles of health, and care. We 
                            aim to give our customers a healthy chemical-free meal for perfect nutrition.
                        </p>
                        <Advantages/>
                    </div>
                </div>

            </section>
        </>
    )
}
