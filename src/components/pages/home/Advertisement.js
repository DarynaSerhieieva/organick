import React from "react";

const Advertisement = () => {

    return (
        <section className="wrapper">
            <div className="advertisement">
                <div className="advertisement__block advertisement__block-banana">
                    <div className="advertisement__content">
                        <h2 className="advertisement__title advertisement__title-white">Natural!!</h2>
                        <p className="advertisement__text advertisement__text-white">
                            Get Garden Fresh Fruits
                        </p>
                    </div>
                    
                </div>
                <div className="advertisement__block advertisement__block-peach">
                    <div className="advertisement__content">
                        <h2 className="advertisement__title">Offer!!</h2>
                        <p className="advertisement__text">
                            Get 10% off on Vegetables
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;
