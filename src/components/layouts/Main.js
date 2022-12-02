import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Main = () => {

    return(
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};

export default Main;