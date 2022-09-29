import React from "react";
import { NavLink } from "react-router-dom";

import cart from './img/cart.svg';

const ButtonCart = () => {
    return(
        <>
            <NavLink className="button-cart" to="cart">
                <img src={cart}  alt="cart" width="56" height="56"/>
                <span className="button-cart__text">Cart</span>
                <span className="button-cart__counter">0</span> {/* in this area will be counter */}
            </NavLink>
        </>
    )
}

export default ButtonCart;