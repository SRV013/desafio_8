import React, { useState } from "react";
import styles from "./pages.css";
import { ReportForm } from "components/ReportPet/report_list";
import { findResult } from "atoms";
import { useRecoilState } from "recoil";

export function PetReport() {
    const Result = useRecoilState(findResult);
    const [filter, setFilter] = useState({radius:500000 ,distance: '500 km'});        
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>
                Desaparecidas y extraviadas
            </h1>
            <p className={styles["content__container__desciption"]}>
                Se encontraron <a className={styles["encontradas"]}>{Result[0]}</a> mascotas a{" "}
                <a className={styles["cerca"]}>{filter.distance}</a> de distancia, si vistes algunas nos
                gustarias que la puedas reportar !!!
            </p>
            <div className={styles["distancia"]}>
                <a onClick={() => setFilter({radius:100 , distance: '1 Cuadra'})}>1 cuadras</a>
                <a onClick={() => setFilter({radius:500 , distance: '50 cuadras'})}>50 cuadras</a>
                <a onClick={() => setFilter({radius:1000, distance: '10 cuadras'})}>10 cuadras</a>
                <a onClick={() => setFilter({radius:10000,distance: '10 km'})}>10 km</a>
                <a onClick={() => setFilter({radius:100000,distance: '100 km'})}>100 km</a>
                <a onClick={() => setFilter({radius:500000,distance: '500 km'})}>500 km</a>
            </div>
            <ReportForm raduis={filter.radius}/>
            <p className={styles["content__container__suggestion"]}>
                haga click para añadir una nueva ...
            </p>
        </div>
    );
}
