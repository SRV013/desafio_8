import React from "react";
import { Link } from "react-router-dom";
// import style from "./header.css";

export function HeaderApp() {
    return (
        <div >
            <a >
                <img src="../src/assets/logo.png" />
            </a>
           <nav >
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
            <div >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>);
}
