import React from "react";
import FarmContentItems from "./FarmContentItems";
const FromOurFarm = () => {

    return(
        <>
           <section>
            <div className="from-our-farm">
                <div className="from-our-farm__img"></div>
                <div className="from-our-farm__content">
                    <h2 className="from-our-farm__content-yellowtail">Eco Friendly</h2>
                    <h2 className="from-our-farm__content-title">From our Farm to your Home.</h2>
                    <FarmContentItems/>
                </div>
            </div>
           </section>

        </>
    );
};

export default FromOurFarm;
