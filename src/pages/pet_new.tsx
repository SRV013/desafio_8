import React from "react";
import styles from "./pages.css";
import { MyPetForm } from "components/PetCard/new";
export function PetNew() {
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Nueva Mascota</h1>
            <p className={styles["content__container__desciption"]}>
                Ingrese los datos de su mascota !!!
            </p>
            <MyPetForm />
            <p className={styles["content__container__suggestion"]}>
                haga click en guardar ...
            </p>
        </div>
    );
}
