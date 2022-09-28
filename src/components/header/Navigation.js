import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const Navigation = () => {
    const menu = useSelector( state => state.menu );

    return (
        <>
            <ul className="navigation">
                {
                    menu.map(item => {
                        return (
                            <li className="navigation__item" key={uniqid()}>
                                <NavLink to={item.to}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default Navigation;
