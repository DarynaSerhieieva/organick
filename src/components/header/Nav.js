import React from "react";
import { NavLink } from "react-router-dom";
import uniqid from 'uniqid';

const Nav = ({navLink}) => {
    return (
        <>
            <ul>
                {
                    navLink.map(item => {
                        return (
                            <li key={uniqid()}>
                                <NavLink to={item.to}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default Nav;
