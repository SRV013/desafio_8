import React from "react";
import { LoginForm,Comison } from "../components/LoginForm";
import styles from "./pages.css";

export function Login() {
const handleSearch = (search)=>{
    console.log(search);
}
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Login</h1>
            <p className={styles["content__container__desciption"]}>
                Ingrese su correo electronico !!!
            </p>
            <LoginForm onSearch={handleSearch} />
            <p className={styles["content__container__desciption"]}>¿No tenés cuenta aún? <a href="usuario_nuevo">Crear cuenta</a></p>
        </div>
    );
}
