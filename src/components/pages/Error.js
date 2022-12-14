import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

import errorImg from "../../img/error.svg"

export const Error = () => {

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    return (
        <>
            <div className="error">
                <div className="error__title">
                    <div>
                        <span>Sorry your path </span> 
                        <span className="error__path">{usePathname()}</span>
                        <span> is not correct, </span>
                    </div>
                    <div>
                        <span>go to </span> 
                        <NavLink className="error__home" to="/">Home</NavLink> 
                        <span> page</span>
                    </div>
                    <img className="error__img" src={errorImg} />
                </div>
            </div>
        </>
    );
};
