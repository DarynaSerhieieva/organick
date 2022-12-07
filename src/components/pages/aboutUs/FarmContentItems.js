import React from "react";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

const FarmContentItems = () => {

    const aboutOurFarm = useSelector(state => state.aboutOurFarm);

    return(
        <>
            <ul className="about-farm">
                {
                    aboutOurFarm.map(item => {
                        const { title, text } = item;
                        return(
                            <li  key={uniqid()}>
                                <div>
                                    <h3 className="about-farm__title">{title}</h3>
                                    <p className="about-farm__text">{text}</p>
                                </div>

                            </li>
                        )
                    })
                }
                
            </ul>
        </>
    );
};

export default FarmContentItems;
