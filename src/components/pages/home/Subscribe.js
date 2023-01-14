import React from "react";

const Subscribe = () => {

    return (
        <>
            <section className="wrapper">
                <div className="subscribe">
                    <h2 className="subscribe__title">Subscribe Our Newsletter</h2>
                    <form className="subscribe__form">
                        <input className="subscribe__input" type="email" placeholder="Enter your email address"/>
                        <button className="subscribe__button" type="submit">
                            <span className="subscribe__button-name">Subscribe</span>
                            <span className="subscribe__arrow"></span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Subscribe;
