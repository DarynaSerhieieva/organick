import React from "react";

import HeaderSection from "./HeaderSection";

const NewsHome = () => {

    return (
        <>
            <section className="wrapper">
                <div className="header-home">
                    <HeaderSection
                        heading="Discover The recent content about organic products"
                        headingYellow="News"
                        btnName="More News"
                        btnColor={false}
                        textColor=""
                        to="/pages"
                    />
                </div>
            </section>
        </>
    );
};

export default NewsHome;
