import React, { useState } from "react";
import { Input } from "ui/input_text/";
import { Button } from "ui/button";
import styles from "./login.css";
import { userLogin } from "lib/user";
import { tokenHooks, myId } from "hooks";
import { LoadingSpinner } from "pages/spinner";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const [token, setToken] = tokenHooks();
    const [userId, setuserId] = myId();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setIsLoading(true);
        const data = await userLogin(email, password);
        if (data) {
            setToken(data[0]);
            setuserId(data[1]);
            setIsLoading(false);
            navigate("/user_edit");
        } else {
            //        setUser("error de pass");
        }
    };
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form onSubmit={login} className={styles["__container"]}>
                    <Input
                        type={"password"}
                        name={"password"}
                        placeholder="password actual"
                        required></Input>
                    <Input
                        type={"password"}
                        name={"password"}
                        placeholder="ingrese password"
                        required></Input>
                    <Input
                        type={"password"}
                        name={"password"}
                        placeholder="repita password"
                        required></Input>
                    <Button name={"save"}>Guardar</Button>
                </form>
            )}
        </>
    );
}
