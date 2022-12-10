import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const UtilityPages = () => {
    const utilityPages = useSelector(state => state.utilityPages);

    return(
        <>
            <ul>
                {
                    utilityPages.map(item => {
                        const { link, name } = item;

                        return(
                            <li key={uniqid()}>
                                <a src={link}>{name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default UtilityPages;
