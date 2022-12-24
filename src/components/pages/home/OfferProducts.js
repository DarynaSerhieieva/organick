import React from "react";

import HeaderSection from "./HeaderSection";

const OfferProducts = () => {

    return(
        <section className="offer-product">
            <div className="wrapper">
                <HeaderSection
                    heading="We Offer Organic for You"
                    headingYellow="Offer Products"
                    btnName="View All products"
                    btnColor={true}
                    textColor="white"
                    to="/shop"
                />
                <div></div>
            </div>
        </section>
    );
};

export default OfferProducts;
