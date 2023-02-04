import React from "react";
import { LoginForm } from "components/LoginForm/login_edit";
import styles from "./pages.css";
export function LoginEdit() { 
    
    
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Password</h1>
            <p className={styles["content__container__desciption"]}>
                Ingrese su nueva contraseña !!!
            </p>
            <LoginForm />
            <p className={styles["content__container__suggestion"]}>haga click en guardar ...</p>
        </div>
    );
}
