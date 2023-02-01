import React, { useState } from "react";
import { Input } from "ui/input_text/";
import { Button, ButtonV2 } from "ui/button";
import styles from "../LoginForm/login.css";
import { Link } from "react-router-dom";
import { userShow } from "lib/user";
import { LoadingSpinner } from "pages/spinner";
import { myToken, usermyId } from "atoms";
import { useRecoilState } from "recoil";
import { tokenHooks, myId } from "hooks";
import { useNavigate } from "react-router-dom";

export function MyDataForm(p) {
    
    const [dataUSer, setdataUSer] = useState();

    const [userId, setuserId] = myId();
    const [token, setToken] = tokenHooks();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);

    const data = async function (e) {
        e.preventDefault();
        setIsLoading(true);

        const dataJson = await userShow(my_Token, idUser);
        if (dataJson) {
            setIsLoading(false);
            setdataUSer(dataJson);
        }
    };
    const closeSession = (e) => {
        e.preventDefault();
        setToken("");
        setuserId("");
        navigate("/login");
    };
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form className={styles["__container"]} onSubmit={closeSession}>
                    <Input
                        type={"mail"}
                        name={"email"}
                        placeholder="correo electrónico"
                        required
                        value={dataUSer ? dataUSer.email : ""}
                        readOnly={true}></Input>
                    <Input
                        type={"text"}
                        name={"nombre"}
                        placeholder="nombre"
                        value={dataUSer ? dataUSer.nombre : ""}
                        required></Input>
                    <Input
                        type={"text"}
                        name={"telefono"}
                        placeholder="teléfono"
                        value={dataUSer ? dataUSer.telefono : ""}
                        required></Input>
                    {/* <Input type={"password"} name={"password"} placeholder="ingrese password" required></Input>
                <Input type={"password"} name={"passwordr"} required placeholder="repita password"></Input> */}
                    <Link to="/login_edit">
                        <img src="../src/assets/password.png" />
                    </Link>
                    <Button name={"save"} onClick={data}>
                        Guardar
                    </Button>
                    <ButtonV2 name={"close"} onclick={closeSession}>
                        Cerrar Session
                    </ButtonV2>
                </form>
            )}
        </>
    );
}
