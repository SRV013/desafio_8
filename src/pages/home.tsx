import React from "react";
import styles from "./pages.css";
import { Button } from "../ui/button";

export function Home() {
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>
                Perdistes tu mejor amigo?
            </h1>
            <div className={styles["content__container"]}>
                <p className={styles["content__container__desciption"]}>
                    Estas son las mascotas que han sido reportadas cerca de ti.
                </p>
                <Button >mascotas perdidas</Button>
            </div>
        </div>
    );
}
