import React from "react";
import { NavLink } from "react-router-dom";

import './Home.scss';

export const Home = () => {

    return (
        <main>
            <section>
                <div className="nature-world">
                    <div className="nature-world__content">
                        <h2 className="nature-world__title-yellowtail">Made with nature</h2>
                        <h2 className="nature-world__title">Welcome to the world of nature and organic.</h2>
                        <NavLink className="nerural-world__link" to="/pages">Explore Now</NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
};

