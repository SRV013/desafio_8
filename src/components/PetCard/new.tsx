import React, { useState } from "react";
import { Input } from "ui/input_text/";
import { Button, ButtonSmall } from "ui/button";
import styles from "./index.css";

export function MyPetForm() {
    function pet(e) {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const sobremi = e.target.sobremi.value;
        const ubicacion = e.target.ubicacion.value;
        const publicada = e.target["publicada"].checked;
        const perdida = e.target["perdida"].checked;
    }
    return (
        <div>
            <form onSubmit={pet} className={styles["__container"]}>
                <div className={styles["mascota"]}>
                    <div className={styles["mascota__cargar"]}>
                        AGREGAR FOTO
                    </div>
                    <div className={styles["mascota__imagen"]}></div>
                </div>
                <Input
                    type={"text"}
                    name={"nombre"}
                    placeholder="nombre"
                    required></Input>
                <textarea
                    name="sobremi"
                    placeholder="sobre mi"
                    required></textarea>
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
        </div>
    );
}
