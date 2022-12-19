import React from "react";
import { NavLink } from "react-router-dom";

const OfferProducts = () => {

    return(
        <section className="offer-product">
            <div className="wrapper">
                <div className="offer-product__content">
                   <div>
                        <h2 className="offer-product__title-yellowtail">Offer Products</h2>
                        <h2 className="offer-product__title">We Offer Organic for You</h2>
                   </div>
                   <NavLink className="offer-product__link" to="/shop">
                        <span className="offer-product__link-padding">View All products</span>
                        <span className="offer-product__link-arrow"></span>
                   </NavLink>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default OfferProducts;
