import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const ContactUs = () => {
    const contactUs = useSelector(state => state.contactUs);

    return(
        <>
            <ul>
                {
                    contactUs.map(item => {
                        const { type, value } = item;

                        return(
                            <li key={uniqid()}>
                                <h3>{type}</h3>
                                <p>{value}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default ContactUs;
