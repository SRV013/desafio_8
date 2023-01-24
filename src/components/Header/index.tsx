import React from "react";
import { Link } from "react-router-dom";
import style from "./header.css";

export function HeaderApp() {
    return (
        <div className={style["header-component__container"]}>
            <a className={style["header-component__logo"]}>
                <img src="../src/assets/logo.png" />
            </a>
           <nav className={style["header-component-nav"]}>
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
            <div className={style["menu"]}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>);
}
