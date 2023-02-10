import React from "react";
import styles from "./pages.css";
import { Button } from "ui/button";
import { useNavigate } from "react-router-dom";

export function Home() {
        const navigate = useNavigate();
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>
                Perdistes tu mejor amigo?
            </h1>
            <div className={styles["content__container"]}>
                <p className={styles["content__container__desciption"]}>
                    Ver las mascotas que han sido reportadas cerca de ti.
                </p>
                <Button onClick={()=>navigate("/report_list")}>mascotas perdidas</Button>
                <p className={styles["content__container__suggestion"]}>haga click para ver ...</p>
            </div>
        </div>
    );
}
