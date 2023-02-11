import React, { useState, useEffect } from "react";
import { Input, TextArea } from "ui/input_text/";
import { Button, ButtonSmall } from "ui/button";
import { LoadingSpinner } from "pages/spinner";
import { MapboxSeach } from "components/MapBox/mapbox";

import styles from "./index.css";
import { petCurrentEdit } from "lib/pet";
import { MyPetImg } from "./dropzone";
import { useNavigate } from "react-router-dom";
import { myToken, usermyId, petSet, pictureId } from "atoms";
import { myPets } from "hooks";
import { useRecoilState } from "recoil";
export function MyPetForm() {
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const petEdit = useRecoilState(petSet);
    const [petCurrent, setCurrentPet] = myPets();
    const picture = useRecoilState(pictureId);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setVisible] = useState(false);

    async function pet(e) {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const sobremi = e.target.sobremi.value;
        const ubicacion = "lat: -57.543765 , Lng: -38.012286";
        const publicada = e.target["publicada"].checked;
        const perdida = e.target["perdida"].checked;
        const pictureURL = picture[0];
        // .includes('https://res.cloudinary.com')  || picture[0];
        // console.log(pictureURL)
        const lat = "-57.543765";
        const lng = "-38.012286";
        setIsLoading(true);
        petCurrentEdit(my_Token, petEdit[0].id, {
            nombre,
            sobremi,
            pictureURL,
            publicada,
            perdida,
        }).then((pets) => {
            setCurrentPet({ id: idUser[0], ...pets });
            setIsLoading(false);
            navigate("/pet_list");
        });
    }

    return (
        <>
            {isVisible ? <MapboxSeach /> : null}
            {isLoading ? (
                <LoadingSpinner />
            ) : petEdit[0]?.id ? (
                <form
                    onSubmit={pet}
                    className={
                        !isVisible
                            ? styles["__container"]
                            : styles["__container__opc"]
                    }
                    onClick={() => {
                        {
                            isVisible ? setVisible(!isVisible) : null;
                        }
                    }}>
                    <MyPetImg />
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
                    <div
                        className={styles["ubicacion"]}
                        onClick={() => {
                            setVisible(!isVisible);
                        }}>
                        <img src="../src/assets/ubicacion.png" />
                        <a>Agregar Ubicacion</a>
                    </div>
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
