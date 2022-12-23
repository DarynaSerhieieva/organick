import React from "react";
import { NavLink } from "react-router-dom";
import Advertisement from "./Advertisement";

import './Home.scss';
import OfferProducts from "./OfferProducts";
import ShopSection from "./ShopSection";

export const Home = () => {

    return (
        <main>
            <section className="">
                <div className="nature-world">
                    <div className="wrapper">
                        <div className="nature-world__content">
                            <h2 className="nature-world__title-yellowtail">Made with nature</h2>
                            <h2 className="nature-world__title">Welcome to the world of nature and organic.</h2>
                            <NavLink className="nature-world__link" to="/pages">
                                <span className="nature-world__link-padding">Explore Now</span>
                                <span className="nature-world__arrow"></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <Advertisement/>
            <OfferProducts/>
            <ShopSection/>
        </main>
    );
};

