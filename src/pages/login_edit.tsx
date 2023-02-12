import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "components/LoginForm/login_edit";
import { myToken } from "atoms";
import styles from "./pages.css";
import { useRecoilState } from "recoil";
export function LoginEdit() {
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
            <h1 className={styles["content__title"]}>Password</h1>
            <p className={styles["content__container__desciption"]}>
                Ingrese su nueva contraseña !!!
            </p>
            <LoginForm />
            <p className={styles["content__container__suggestion"]}>
                haga click en guardar ...
            </p>
        </div>
    );
}
