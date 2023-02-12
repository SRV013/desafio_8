import React, { useState } from "react";
import { Input, TextArea } from "ui/input_text/";
import { useNavigate } from "react-router-dom";
import { Button } from "ui/button";
import { LoadingSpinner } from "pages/spinner";
import { MyPetImg } from "./dropzone";
import styles from "./index.css";
import { MapboxSeach } from "components/MapBox/mapbox";
import { petCurrentEdit } from "lib/pet";
import { myToken, usermyId, petSet, pictureId, mypetLocation } from "atoms";
import { myPets, myModal } from "hooks";
import { useRecoilState } from "recoil";
export function MyPetForm() {
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const petEdit = useRecoilState(petSet);
    const picture = useRecoilState(pictureId);
    const [coords] = useRecoilState(mypetLocation);
    const [petCurrent, setCurrentPet] = myPets();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [isVisible, setVisible] = myModal();
    async function pet(e) {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const sobremi = e.target.sobremi.value;
        const publicada = e.target["publicada"].checked;
        const perdida = e.target["perdida"].checked;
        const pictureURL = picture[0];
        const lat = coords[0];
        const lng = coords[1];
        if (nombre && sobremi && lat && lng) {
            setIsLoading(true);
            petCurrentEdit(my_Token, petEdit[0].id, {
                nombre,
                sobremi,
                pictureURL,
                publicada,
                perdida,
                lat,
                lng,
            }).then((pets) => {
                setCurrentPet({ id: idUser[0], ...pets });
                setIsLoading(false);
                navigate("/pet_list");
            });
        } else {    
            window.alert("Error : datos incompletos ");
        }
    }
    return (
        <>
            {isVisible ? <MapboxSeach /> : null}
            {isLoading ? (
                <LoadingSpinner />
            ) : petEdit[0]?.id ? (
                <form onSubmit={pet} className={styles["__container"]}>
                    <MyPetImg img={petEdit[0].pictureURL}/>
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
                        onClick={() => setVisible(!isVisible)}>
                        <img src="../src/assets/ubicacion.png" />
                        <a>{coords ? `Modificar` : `Agregar Ubicacion`} </a>
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
