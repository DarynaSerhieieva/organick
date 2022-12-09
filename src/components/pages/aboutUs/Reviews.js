import React from "react";
import uniqid from 'uniqid';

import star from './img/star.svg';
import OurSuccess from "./OurSuccess";

const Reviews = () => {
    
    return (
        <>
            <section>
                <div className="review">
                    <div className="review__custumer">
                        <h2 className="review__title-yellowtail">Testimonial</h2>
                        <h2 className="review__title">What Our Customer Saying?</h2>
                        <img src={require("./img/customer.png")} alt="custemer"/>
                        <ul className="review__rating">
                            {
                                [...Array(5).keys()].map(item =>(<li key={uniqid()}><img src={star} alt="star"/></li>))
                            }
                        </ul>
                        <p className="review__content">
                            The quality of organic produce is extremely high, the service is second to none and the taste of the food takes me back to my childhood when we were growing our own.
                        </p>
                        <h3 className="review__name">Sara Taylor</h3>
                        <span className="review__name-type">Consumer</span>
                    </div>
                    <div className="review__line"></div>
                    <OurSuccess/>
                </div>
            </section>
        </>
    );
};

export default Reviews;
