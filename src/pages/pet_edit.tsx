import React from "react";
import styles from "./pages.css";
import { MyPetForm } from "components/PetCard/edit";
import { Link } from "react-router-dom";
import { myToken } from "atoms";
import { useRecoilState } from "recoil";
export function PetEdit() {
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
            <h1 className={styles["content__title"]}>Editar Mascota</h1>
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
