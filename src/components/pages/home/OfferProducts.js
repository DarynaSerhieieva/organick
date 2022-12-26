import React from "react";
import { useSelector } from "react-redux";

import HeaderSection from "./HeaderSection";

const OfferProducts = () => {

    const productList = useSelector( state => state.productsList);

    const discountProductList = productList.filter((item, index) => item.discount || index <= 3);

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
                <div>
                    {
                        discountProductList.map(item => {
                            <h2>{item.name}</h2>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default OfferProducts;
