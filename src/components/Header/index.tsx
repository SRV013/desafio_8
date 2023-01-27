import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.css";
console.log({ style });

export function HeaderApp() {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
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
                        ? style["header-component-nav"] + " " + style["hambur"]
                        : style["header-component-nav"]
                }>
                <ul>
                    <li>
                        <Link key={"login"} to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link key={"mascotas"} to="/mascotas">
                            Mascotas
                        </Link>
                    </li>
                    <li>
                        <Link key={"reportes"} to="/reportes">
                            Reportes
                        </Link>
                    </li>
                </ul>
            </nav>
            <div
                onClick={handleToggle}
                className={
                    isActive
                        ? style["menu"] + " " + style["active"]
                        : style["menu"]
                }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
