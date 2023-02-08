import React, { useState } from "react";
import { Input } from "ui/input_text/";
import { Button } from "ui/button";
import styles from "./login.css";
import { userSave } from "lib/user";
import { myToken, usermyId } from "atoms";
import { useRecoilState } from "recoil";
import { LoadingSpinner } from "pages/spinner";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const login = async (e) => {
        e.preventDefault(); 
        const password = e.target.newpass.value;
        const repeat = e.target.repeat.value;        
        if (password == repeat) {
            setIsLoading(true);
            userSave(my_Token, idUser, {password , repeat}).then((e) => {
             setIsLoading(false);    
             navigate("/user_edit");
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
                <form onSubmit={login} className={styles["__container"]}>
                    <Input
                        type={"password"}
                        name={"newpass"}
                        placeholder="ingrese password"
                        required></Input>
                    <Input
                        type={"password"}
                        name={"repeat"}
                        placeholder="repita password"
                        required></Input>
                    <Button name={"save"}>Guardar</Button>
                </form>
            )}
        </>
    );
}
