import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const UtilityPages = () => {
    const utilityPages = useSelector(state => state.utilityPages);

    return(
        <>
            <ul className="utility-page">
                {
                    utilityPages.map(item => {
                        const { link, name } = item;

                        return(
                            <li className="utility-page__item" key={uniqid()}>
                                <a className="utility-page__link" src={link}>{name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default UtilityPages;
