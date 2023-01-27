import React from "react";
import {MyDataForm} from "../components/MyDataForm"
import styles from "./pages.css";

export function UserEdit(){
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Mis Datos</h1>
            <p className={styles["content__container__desciption"]}>
            Actualiza tu perfil !!!
            </p>
            <MyDataForm />
            <p className={styles["content__container__suggestion"]}>haga click para actualizar ...</p>
        </div>
    );
}