import React from "react";
import styles from "./pages.css";
import { Link } from "react-router-dom";
import { PetForm } from "components/PetCard/pet_list";
import { myToken } from "atoms";
import { useRecoilState } from "recoil";
export function PetList() {
    const my_Token = useRecoilState(myToken);
    return !my_Token[0] ? (
        <div className={styles["containter"]}>
            <h2 className={styles["content__title"]}>Advertencia !</h2>
            <p className={styles["content__container__desciption"]}>
                ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí.</Link>
            </p>
        </div>
    ) : (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Mis Mascotas</h1>
            <p className={styles["content__container__desciption"]}>
                Podes agregar y modificar tus mascotas !!!
            </p>
            <PetForm />
            <p className={styles["content__container__suggestion"]}>
                haga click para añadir una nueva ...
            </p>
        </div>
    );
}
