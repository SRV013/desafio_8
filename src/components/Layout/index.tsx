import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderApp } from "../header/index";
import { Footer } from "../footer/index";

export function Layout() {
    return (
        <>
            <HeaderApp />
            <Outlet />
            <Footer />
        </>
    );
}
