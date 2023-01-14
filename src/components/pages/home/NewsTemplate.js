import React from "react";
import { NavLink } from "react-router-dom";

const NewsTemplate = ({item}) => {
    const { author, header, text, img, alt } = item;

    return(
        <article>
            <div className="news-home">
                <div className="news-home__img">
                    <img className="news-home__img-size" src={img} alt={alt}/>  
                </div>
                
                <div className="news-home__content">
                    <div className="news-home__author">{author}</div>
                    <h3 className="news-home__header">{header}</h3>
                    <p className="news-home__text">{text}</p>
                    <NavLink className="news-home__link" to="/pages">View More</NavLink>
                </div>
            </div>
            
        </article>
    );
};

export default NewsTemplate;
