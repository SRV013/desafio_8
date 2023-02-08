import React, { useState, useEffect } from "react";
import { Button, ButtonSmall } from "ui/button";
import styles from "./index.css";
import { LoadingSpinner } from "pages/spinner";
import { petList } from "lib/pet";
import { myToken, usermyId } from "atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
export function PetForm() {
    const my_Token = useRecoilState(myToken);
    const idUser = useRecoilState(usermyId);
    const [petView, setpetList] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        petList(my_Token, idUser).then((pet) => {
            setpetList(pet);
            setIsLoading(false);
        });
    }, []);
    const newPet = () => {
        navigate("/pet_new");
    };
    const editPet = (i) => {
        // setCurrentPet(pets[i]);
        // setEdit(true);
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
                            onClick={() => editPet(pet.id)}>
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
                    <Button type="button" onClick={newPet}>
                        nueva mascota
                    </Button>
                </div>
            )}
        </>
    );
}
