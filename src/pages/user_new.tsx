import React from "react";
import {MyDataForm} from "components/MyDataForm/new"
import styles from "./pages.css";

export function UserNew(){
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Registrarme</h1>
            <p className={styles["content__container__desciption"]}>
            Complete el formulario de registro!!!
            </p>
            <MyDataForm />
            <p className={styles["content__container__suggestion"]}>haga click para guardar ...</p>
        </div>
    );
}