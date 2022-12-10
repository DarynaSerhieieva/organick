import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const SocialNetwork = () => {
    const socialNetworkBase = useSelector(state => state.socialNetworkBase);

    return(
        <>
             <ul>
                {
                    socialNetworkBase.map(item => {
                        const { link, svg } = item;

                        return(
                            <li key={uniqid()}>
                                <a src={link}>{svg}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default SocialNetwork;
