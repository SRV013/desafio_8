import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.css";

export function HeaderApp() {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);

console.log(style[".active"] ,  style["header-component-nav.active"]);
         
    };

    return (
        <div className={style["header-component__container"]}>
            <Link
                key={"Home"}
                to="/"
                className={style["header-component__logo"]}>
                <img src="../src/assets/logo.png" />
            </Link>
            <nav
                className={
                    isActive
                        ? style["header-component-nav__active"]
                        : style["header-component-nav"]
                }>
                <ul>
                    <li>
                        <Link key={"login"} to="/login">
                            Login
                        </Link>
                    </li>
                    <li>Mascotas</li>
                    <li>Reportes</li>
                </ul>
            </nav>
            <div
                onClick={handleToggle}
                className={
                    isActive 
                        ? style["menu__active"] 
                        : style["menu"]}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
