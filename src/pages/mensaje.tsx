
import React from "react";
import styles from "./pages.css";
export function Mensaje() {     
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Felicitaciones</h1>
            <p className={styles["content__container__desciption"]}>
            Sus datos fueron enviados con correctamente, Gracias por colaborar con nuestros amigos !!!
            </p>
        </div>
    );
}
