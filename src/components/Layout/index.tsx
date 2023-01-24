import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderApp } from "../header";
import { Footer } from "../footer";

export function Layout() {
    return (
        <>
            <HeaderApp />
            <Outlet />
            <Footer />
        </>
    );
}
