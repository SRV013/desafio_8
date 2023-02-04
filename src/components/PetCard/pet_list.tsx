import React, { useState } from "react";
import { Button, ButtonSmall } from "ui/button";
import styles from "./index.css";
import { useNavigate } from "react-router-dom";
export function PetForm() {
    const navigate = useNavigate();
    const newPet = () => {
        navigate("/pet_new");
    };
    return (
        <div className={styles["__container"]}>
            <div className={styles["mascota"]}>
           {/* <template id="mascota-template"> */}
                <div className={styles["mascota__imagen"]}></div>
                <div className={styles["mascota__nombre"]}>my</div>
                <ButtonSmall className={styles["small__button"]}>editar</ButtonSmall>
           {/* </template>   */}
           </div>   
            <Button type="button" onClick={newPet}>nueva mascota</Button>
        </div>
    );
}
