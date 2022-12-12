import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const SocialNetwork = () => {
    const socialNetworkBase = useSelector(state => state.socialNetworkBase);

    return(
        <>
             <ul className="social-network">
                {
                    socialNetworkBase.map(item => {
                        const { link, svg } = item;

                        return(
                            <li className="social-network__icone" key={uniqid()}>
                                <a className="social-network__link" src={link}>
                                    <div className="social-network__icone-circle">{svg}</div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default SocialNetwork;
