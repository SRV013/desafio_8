import React , {useState} from "react";
import { MapboxSeach } from "components/MapBox/mapbox";
import { ButtonSmall } from "ui/button";
import styles from "./pages.css";
import { useNavigate } from "react-router-dom";

export function Mapbox() {
    const navigate = useNavigate();

    const [isVisible, setVisible] = useState(true);

const Modal = ()=>{
    setVisible(!isVisible);
   console.log(isVisible);
    
}

    return (
        <>
            <div className={styles["containter"]}>
                <h1 className={styles["content__title"]}>Donde esta?</h1>
                <p className={styles["content__container__desciption"]}>
                    Ingresá tu ubicacion y luego preciona ENTER.
                </p>
                <ButtonSmall onClick={Modal}>volver</ButtonSmall>
               
            {
            isVisible ? (
                <MapboxSeach />
                ) : null
            }
               
               
               
                <p className={styles["content__container__suggestion"]}>
                    haga click para volver al menu anterior ...
                </p>
            </div>
        </>
    );
}
