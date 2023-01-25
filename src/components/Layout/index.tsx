import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderApp } from "../Header";
import { Footer } from "../Footer";

export function Layout() {
    return (
        <>
            <HeaderApp />
            <Outlet />
            <Footer />
        </>
    );
}