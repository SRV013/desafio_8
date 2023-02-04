import React from "react";
import styles from "./pages.css";
import { PetForm } from "components/PetCard/pet_list";

export function PetList() {
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Mis Mascotas</h1>
            <p className={styles["content__container__desciption"]}>
                Podes agregar y modificar tus mascotas !!!
            </p>
            <PetForm />
            <p className={styles["content__container__suggestion"]}>haga click para añadir una nueva ...</p>
        </div>
    );
}
