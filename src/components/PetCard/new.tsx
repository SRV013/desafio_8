import React, { useState } from "react";
import { Input , TextArea } from "ui/input_text/";
import { Button, ButtonSmall } from "ui/button";
import { LoadingSpinner } from "pages/spinner";
import styles from "./index.css";
import { petNew } from "lib/pet";
import { MyPetImg } from "./dropzone";
import { useNavigate } from "react-router-dom";
import { myToken, usermyId, pictureId } from "atoms";
import { useRecoilState } from "recoil";
export function MyPetForm() {
    const picture = useRecoilState(pictureId);
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    async function pet(e) {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const sobremi = e.target.sobremi.value;
        const ubicacion = "lat: -57.543765 , Lng: -38.012286";
        const publicada = e.target["publicada"].checked;
        const perdida = e.target["perdida"].checked;
        const pictureURL = picture[0];
        const lat = "-57.543765";
        const lng = "-38.012286";
        setIsLoading(true);
        petNew(my_Token, idUser, {
            nombre,
            sobremi,
            publicada,
            perdida,
            pictureURL,
            lat,
            lng,
        }).then((e) => {
            setIsLoading(false);
            navigate("/pet_list");
        });
    }
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <form onSubmit={pet} className={styles["__container"]}>
                    <MyPetImg />
                    <Input
                        type={"text"}
                        name={"nombre"}
                        placeholder="nombre"
                        required></Input>
                    <TextArea
                        type="textarea"
                        name="sobremi"
                        placeholder="sobre mi"
                        required></TextArea>
                    <img src="../src/assets/ubicacion.png" />
                    <ButtonSmall class="small__button">
                        Agregar ubicacion
                    </ButtonSmall>
                    <label>
                        <input type="checkbox" name="publicada" />
                        Publicar Mascota
                    </label>
                    <label>
                        <input type="checkbox" name="perdida" />
                        Marcar Como Perdida
                    </label>
                    <Button type="button" name={"save"}>
                        Guardar
                    </Button>
                </form>
            )}
        </>
    );
}
