import React from "react";
import FarmContentItems from "./FarmContentItems";
const FromOurFarm = () => {

    return(
        <>
           <section>
            <div className="from-our-farm">
                <div className="from-our-farm__img"></div>
                <div>
                    <h2>Eco Friendly</h2>
                    <h2>From our Farm to your Home.</h2>
                    <FarmContentItems/>
                </div>
            </div>
           </section>

        </>
    );
};

export default FromOurFarm;
