import React from "react";
import FarmContentItems from "./FarmContentItems";
const FromOurFarm = () => {

    return(
        <>
           <section>
            <div className="from-our-farm">
                <div className="from-our-farm__img"></div>
                <div className="from-our-farm__content">
                    <div className="from-our-farm__content-position">
                        <h2 className="from-our-farm__content-yellowtail">Eco Friendly</h2>
                        <h2 className="from-our-farm__content-title">From Our Farm To Your Home.</h2>
                        <FarmContentItems/>
                    </div>
                    
                </div>
            </div>
           </section>

        </>
    );
};

export default FromOurFarm;
