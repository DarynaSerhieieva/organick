import React, { useState } from "react";
import uniqid from 'uniqid';

const ProductTemplate = ({ item}) => {
    const [appearBtn, setAppearBtn] = useState(false);

    const { name, img, type, price, newPrice, discount, newItem, rating } = item;

    return (
        <>
            <div className={"product-template"}
                onMouseEnter={() => setAppearBtn(true)}
                onMouseLeave={() => setAppearBtn(false)}>
                <div className="product-template__box">
                    <div className="product-template__icon">
                        <span className="product-template__type">{type}</span>
                        { newItem?<span className="product-template__new">new</span>:<></> }
                    </div>
                    <img className="product-template__img" src={img} alt={name}/>
                    <div className="product-template__inform">
                        <div>
                            <h3 className="product-template__name">{name}</h3>
                            <div className="product-template__price">
                                <span className={discount? "product-template__price-old" : "product-template__price-current"}>{price}</span>
                                {
                                    discount? 
                                    <span className="product-template__price-current">{newPrice}</span> :
                                    <></>
                                }
                            </div>
                        </div>
                        {
                            appearBtn ?
                            <button className="product-template__btn" type="button">add to cart</button>
                            :
                            <ul className="product-template__rating">
                                {
                                    [...Array(rating).keys()].map(item =>(
                                        <li key={uniqid()}>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.82942 0.781287C7.13702 -0.122413 8.41509 -0.122403 8.72279 0.781287L9.70629 3.67075C9.84419 4.07602 10.2248 4.34853 10.6529 4.34853H13.7331C14.7131 4.34853 15.1083 5.61178 14.303 6.17025L11.8923 7.84218C11.5254 8.09662 11.3717 8.56342 11.5155 8.98612L12.455 11.7462C12.7658 12.6594 11.7311 13.4399 10.9385 12.8901L8.34599 11.0922C8.00319 10.8544 7.54893 10.8544 7.20619 11.0922L4.61371 12.8901C3.82104 13.4399 2.78632 12.6594 3.09715 11.7462L4.03664 8.98612C4.18051 8.56342 4.02675 8.09662 3.65987 7.84218L1.24913 6.17025C0.443886 5.61178 0.839076 4.34853 1.81902 4.34853H4.89923C5.32733 4.34853 5.70795 4.07602 5.8459 3.67075L6.82942 0.781287Z" fill="#FFA858"/>
                                            </svg>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductTemplate;
