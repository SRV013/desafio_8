import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "pages/spinner";
import { Button } from "ui/button";
import styles from "./index.css";
import { petList } from "lib/pet";
import { myPets , myPicture} from "hooks";

import { myToken, usermyId , pictureId} from "atoms";
import { useRecoilState } from "recoil";
export function ReportForm() {
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const [petCurrent, setCurrentPet] = myPets();
    const [petView, setpetList] = useState([]);
    const [Picture, setpicture] = myPicture();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        petList(my_Token, idUser).then((pet) => {
            setpetList(pet);
            setIsLoading(false);
        });
    }, [setCurrentPet]);
    const newPet = () => {
        navigate("/pet_new");
    };
    const editPet = (pets) => {
        setpicture(pets.pictureURL);
        setCurrentPet(pets);
        navigate("/pet_edit");
    };
    return (
        <>
            {" "}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className={styles["__container"]}>
                    {petView.map((pet) => (
                        <div
                            className={styles["mascota"]}
                            key={pet.id}
                            onClick={() => editPet(pet)}>
                            <div
                                className={styles["mascota__imagen"]}
                                style={{
                                    backgroundImage: `url(${pet.pictureURL})`,
                                }}></div>
                            <div className={styles["mascota__nombre"]}>
                                {pet.nombre}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
