import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const OurSuccess = () => {

    const ourSuccess = useSelector(state => state.ourSuccess);

    return(
        <>
            <ul className="success">
                {
                    ourSuccess.map(item => {
                        const { type, value } = item;
                        return(
                            <li key={uniqid()} className="success__cercle">
                                <div className="success__cercle-grey">
                                    <h2 className="success__value">{value}</h2>
                                    <h3 className="success__type">{type}</h3>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default OurSuccess;
