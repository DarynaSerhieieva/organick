import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import uniqid from 'uniqid';

const ShopSection = () => {

    const listShopSection = useSelector(state => state.listShopSection);

    return (
        <>
            <section className="shop-section">
                <div className="shop-section__box">
                    {
                        listShopSection.map(item => {
                            const { name, to, img } = item
                            return(
                                <div className="shop-section__item" key={uniqid()}>
                                    <img className="shop-section__img" src={require(`${img}`)} alt={name}/>
                                    <NavLink className="shop-section__link" to={to}>{name}</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default ShopSection;
