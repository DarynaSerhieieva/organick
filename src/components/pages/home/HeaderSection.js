import React from "react";
import { NavLink } from "react-router-dom";

const HeaderSection = ({ heading, headingYellow, btnName, btnColor, textColor, to }) => {

    return (
        <>
            <div className="header-section">
                <div>
                    <h2 className="header-section__title-yellowtail">{headingYellow}</h2>
                    <h2 className={`header-section__title ${textColor? 'header-section__title-white': ''}`}>{heading}</h2>
                </div>
                <NavLink className={`header-section__link ${btnColor? 'header-section__link-yellow': 'header-section__link-white'}`  } to={to}>
                    <span className="header-section__name">{btnName}</span>
                    <span className="header-section__arrow"></span>
                </NavLink>
            </div>
        </>
    );
};

export default HeaderSection;
