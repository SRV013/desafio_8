import React, { useState, useEffect } from "react";
import { Input, TextArea } from "ui/input_text/";
import { Button } from "ui/button";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "pages/spinner";
import styles from "./index.css";
import { petSet } from "atoms";
import { userEmail } from "lib/user";
import { NewReport } from "lib/report";
import { useRecoilState } from "recoil";

export function MyReportForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [UserEmail, setIemail] = useState();
    const petEdit = useRecoilState(petSet);
    useEffect(() => {
        userEmail(petEdit[0].idUsuario).then((e) => {
            setIemail(e);
        });
    }, []);
    const editReport = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const idMascota = petEdit[0].id;
        const email = UserEmail;
        const nombre = e.target.nombre.value;
        const telefono = e.target.telefono.value;
        const comentario = e.target.comentario.value;
        console.log(nombre, telefono, comentario , email , idMascota);
        NewReport(idMascota,nombre,telefono ,comentario , email).then((e) => {
            setIsLoading(false);
            navigate("/mensaje");
        });
    };
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form onSubmit={editReport} className={styles["__container"]}>
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
                    <TextArea
                        name="comentario"
                        type={"textarea"}
                        placeholder="donde lo vistes"
                        required></TextArea>
                    <Button type="button" name={"save"}>
                        Enviar
                    </Button>
                </form>
            )}
        </>
    );
}
