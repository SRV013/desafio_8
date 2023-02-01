import React, { useState } from "react";
import { Link } from "react-router-dom";

import { myToken } from "atoms";
import { useRecoilState } from "recoil";

import style from "./header.css";

export function HeaderApp() {
    const Token = useRecoilState(myToken);
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
                        {!Token[0] ? (
                            <Link key={"login"} to="/login">
                                Login
                            </Link>
                        ) : (
                            <Link key={"cuenta"} to="/user_edit">
                                Perfil
                            </Link>
                        )}
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
