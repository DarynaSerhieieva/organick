import React from "react";

import './AboutUs.scss';

import FromOurFarm from "./FromOurFarm";
import Reviews from "./Reviews";
import WeBelieve from "./WeBelieve";

export const AboutUs = () => {

    return (
        <>
            <WeBelieve/>
            <FromOurFarm/>
            <Reviews/>
        </>
    )
}
