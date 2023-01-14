import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

import HeaderSection from "./HeaderSection";
import NewsTemplate from "./NewsTemplate";

const NewsHome = () => {
    const news = useSelector( state => state.news.slice(0, 2));

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
                <div className="news">
                    {
                        news.map( item => <NewsTemplate key={uniqid()} item={item}/> )
                    }
                </div>
            </section>
        </>
    );
};

export default NewsHome;
