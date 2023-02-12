import React from "react";
import { MyDataForm } from "components/MyDataForm/edit";
import styles from "./pages.css";
import { Link } from "react-router-dom";
import { myToken } from "atoms";
import { useRecoilState } from "recoil";
export function UserEdit() {
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
            <h1 className={styles["content__title"]}>Mis Datos</h1>
            <p className={styles["content__container__desciption"]}>
                Actualizar datos de mi perfil !!!
            </p>
            <MyDataForm />
            <p className={styles["content__container__suggestion"]}>
                haga click en guardar ...
            </p>
        </div>
    );
}
