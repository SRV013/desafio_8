import React from "react";
import { LoginForm } from "components/LoginForm";
import styles from "./pages.css";
import { Link} from "react-router-dom";
export function Login() {     
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Login</h1>
            <p className={styles["content__container__desciption"]}>
                Ingrese su correo electronico !!!
            </p>
            <LoginForm />
            <p className={styles["content__container__desciption"]}>
                ¿No tenés cuenta aún? <Link to="/user_new">
                    Crear cuenta</Link></p>
        </div>
    );
}
