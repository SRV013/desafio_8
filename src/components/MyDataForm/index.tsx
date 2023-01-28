import React from "react";
import { Input } from "../../ui/input_text/";
import { Button } from "../../ui/button";
import styles from "../LoginForm/login.css";

export function MyDataForm (p){
        const login = (e) => {
            e.preventDefault();
        };
        return (
            <form onSubmit={login} className={styles["__container"]}>
                <Input type={"text"} name={"mail"} placeholder="correo electrónico" required></Input>
                <Input type={"text"} name={"nombre"} placeholder="nombre" required></Input>
                <Input type={"text"} name={"telefono"} placeholder="teléfono" required></Input>
                <Input type={"password"} name={"password"} placeholder="ingrese password" required></Input>
                <Input type={"password"} name={"passwordr"} required placeholder="repita password"></Input>
                <Button name={"save"}>Guardar</Button>
            </form>
        );
    };
