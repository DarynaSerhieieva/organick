import React from "react";
import { useSelector } from "react-redux";
import ProductTemplate from "../ProductTemplate";

import HeaderSection from "./HeaderSection";

const OfferProducts = () => {

    const productList = useSelector( state => state.productsList);

    const discountProductList = productList.filter(item => item.discount).slice(0, 3);

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
                <div className="offer-product__products">
                    {
                        discountProductList.map(item => {
                            return(
                                <ProductTemplate item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default OfferProducts;
