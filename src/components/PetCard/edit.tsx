import React, { useState } from "react";
import { Input, TextArea } from "ui/input_text/";
import { Button, ButtonSmall } from "ui/button";
import { LoadingSpinner } from "pages/spinner";
import styles from "./index.css";
// import { petView } from "lib/pet";
import { MyPetImg } from "./dropzone";
import { useNavigate } from "react-router-dom";
import {petSet } from "atoms";
import { useRecoilState } from "recoil";
export function MyPetForm() {
    const petEdit = useRecoilState(petSet);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    
    async function pet(e) {
        e.preventDefault();
        // const nombre = e.target.nombre.value;
        // const sobremi = e.target.sobremi.value;
        // const ubicacion = "lat: -57.543765 , Lng: -38.012286";
        // const publicada = e.target["publicada"].checked;
        // const perdida = e.target["perdida"].checked;
        // const pictureURL = picture[0];
        // const lat = "-57.543765";
        // const lng = "-38.012286";
        // setIsLoading(true);
        // petEdit(my_Token, idUser, {
        //     nombre,
        //     sobremi,
        //     publicada,
        //     perdida,
        //     pictureURL,
        //     lat,
        //     lng,
        // }).then((e) => {
        //     setIsLoading(false);
        //     navigate("/pet_list");
        // });
    }
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : petEdit[0]?.id ? (
                <form onSubmit={pet} className={styles["__container"]}>
                    <MyPetImg existingImage={petEdit[0]?.pictureURL} />
                    <Input
                        type={"text"}
                        name={"nombre"}
                        placeholder="nombre"
                        value={petEdit[0]?.nombre}
                        required></Input>
                    <TextArea
                        name="sobremi"
                        type={"textarea"}
                        placeholder="sobre mi"
                        value={petEdit[0]?.sobremi}
                        required></TextArea>
                    <img src="../src/assets/ubicacion.png" />
                    <ButtonSmall class="small__button">
                        Modificar ubicacion
                    </ButtonSmall>
                    <label>
                        <input
                            type="checkbox"
                            name="publicada"
                            defaultChecked={petEdit[0]?.publicada}
                        />
                        Publicar Mascota
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="perdida"
                            defaultChecked={petEdit[0]?.perdida}
                        />
                        Marcar Como Perdida
                    </label>
                    <Button type="button" name={"save"}>
                        Guardar
                    </Button>
                </form>
            ) : (
                <div className={styles["error"]}>Error al leer mascota</div>
            )}
        </>
    );
}
