import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "pages/spinner";
import styles from "./index.css";
import { reportList } from "lib/pet";
import { myPets , myLocation , ResultReportPet } from "hooks";

export function ReportForm(e) {
    const [petCurrent, setCurrentPet] = myPets();
    const [Result, setResult] = ResultReportPet();
    const [petView, setpetList] = useState([]);
    const navigate = useNavigate();    
    const aroundRadius = e.raduis;
    const [location, setlocation] = myLocation();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        if (!location.lng && !location.lat) {
            navigator.geolocation.getCurrentPosition((e) => {
                const lng = e.coords.latitude as any;
                const lat = e.coords.longitude as any;
                setlocation({aroundRadius , lng , lat});
            });
        }
        reportList(e.raduis, location.lat, location.lng).then((pet) => {
            setpetList(pet);
            setResult(pet.length);
            setIsLoading(false);
        });
    }, [e.raduis]);
    
    const editPet = (pets) => {
        setCurrentPet(pets);
        navigate("/report_send");
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
