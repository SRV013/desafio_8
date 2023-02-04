import React, { useState, useEffect } from "react";
import { Input } from "ui/input_text/";
import { Button, ButtonV2 } from "ui/button";
import styles from "../LoginForm/login.css";
import { Link } from "react-router-dom";
import { userShow, userSave } from "lib/user";
import { LoadingSpinner } from "pages/spinner";
import { myToken, usermyId } from "atoms";
import { useRecoilState } from "recoil";
import { tokenHooks, myId } from "hooks";
import { useNavigate } from "react-router-dom";

export function MyDataForm(p) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [dataUSer, setdataUSer] = useState(false);
    const [userId, setuserId] = myId();
    const [token, setToken] = tokenHooks();
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);

    useEffect(() => {
        setIsLoading(true);
        userShow(my_Token, idUser).then((e) => {
            setdataUSer(e);
            setIsLoading(false);
        });
    }, []);

    const saveUser = (pd) => {
        pd.preventDefault();
        setIsLoading(true);
        const nombre = pd.target.nombre.value;
        const telefono = pd.target.telefono.value;
        const email = pd.target.email.value;

        userSave(my_Token, idUser, {nombre, telefono , email}).then((e) => {
            setdataUSer(e);
            setIsLoading(false);
        });
    };

    const closeSession = () => {
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
                <form className={styles["__container"]} onSubmit={saveUser}>
                    <Input
                        type={"email"}
                        name={"email"}
                        placeholder="correo electrónico"
                        required
                        value={dataUSer?.email}
                        readOnly={true}></Input>
                    <Input
                        type={"text"}
                        name={"nombre"}
                        placeholder="nombre"
                        value={dataUSer?.nombre}
                        required></Input>
                    <Input
                        type={"text"}
                        name={"telefono"}
                        placeholder="teléfono"
                        value={dataUSer?.telefono}
                        required></Input>
                    <Link to="/login_edit">
                        <img src="../src/assets/password.png" />
                    </Link>
                    <Button type="button" name={"save"}>
                        Guardar
                    </Button>
                    <ButtonV2 type="button" onClick={closeSession}>
                        Cerrar Session
                    </ButtonV2>
                </form>
            )}
        </>
    );
}
