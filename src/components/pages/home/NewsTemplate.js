import React from "react";
import { NavLink } from "react-router-dom";

const NewsTemplate = ({item}) => {
    const { author, header, text, img, alt } = item;
    
    const firstSentence = text.split(' ').slice(0, 14).join(' ');

    return(
        <article>
            <div className="news-home">
                <div className="news-home__img">
                    <img className="news-home__img-size" src={img} alt={alt}/>  
                </div>
                
                <div className="news-home__content">
                    <div className="news-home__author">{author}</div>
                    <h3 className="news-home__header">{header}</h3>
                    <p className="news-home__text">{firstSentence}</p>
                    <NavLink className="news-home__link" to="/pages">
                        <span>View More</span>
                        <span className="news-home__link-arrow"></span>
                    </NavLink>
                </div>
            </div>
            
        </article>
    );
};

export default NewsTemplate;
