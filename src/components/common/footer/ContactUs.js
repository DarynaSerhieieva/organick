import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const ContactUs = () => {
    const contactUs = useSelector(state => state.contactUs);

    return(
        <>
            <ul className="contact-us">
                {
                    contactUs.map(item => {
                        const { type, value } = item;

                        return(
                            <li className="contact-us__item" key={uniqid()}>
                                <h3 className="contact-us__type">{type}</h3>
                                <p className="contact-us__value">{value}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default ContactUs;
