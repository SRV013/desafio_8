import React, { useState } from "react";
import { Input } from "ui/input_text/";
import { Button } from "ui/button";
import styles from "../LoginForm/login.css";
import { userNew } from "lib/user";
import { LoadingSpinner } from "pages/spinner";
import { useNavigate } from "react-router-dom";
export function MyDataForm(p) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const saveUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const nombre = e.target.nombre.value;
        const telefono = e.target.telefono.value;
        const password = e.target.newpass.value;
        const repeat = e.target.repeat.value;
        if (password == repeat) {
            setIsLoading(true);
            userNew(nombre, telefono, email, password).then((e) => {
                setIsLoading(false);
                 navigate("/");
            });
        } else {
            window.alert("Las contraseñas no coincien !!!");
        }
    };

    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form className={styles["__container"]} onSubmit={saveUser}>
                    <Input
                        type={"email"}
                        name={"email"}
                        placeholder="correo electrónico"
                        required></Input>
                    <Input
                        type={"text"}
                        name={"nombre"}
                        placeholder="nombre"
                        required></Input>
                    <Input
                        type={"text"}
                        name={"telefono"}
                        placeholder="teléfono"
                        required></Input>
                    <Input
                        type={"password"}
                        name={"newpass"}
                        placeholder="ingrese password"
                        required></Input>{" "}
                    <Input
                        type={"password"}
                        name={"repeat"}
                        placeholder="repita password"
                        required></Input>
                    <Button type="button" name={"save"}>
                        Guardar
                    </Button>
                </form>
            )}
        </>
    );
}
