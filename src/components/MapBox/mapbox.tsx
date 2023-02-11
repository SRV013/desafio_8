import React, { useState } from "react";
//import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { myLocation } from "hooks/index";
import mapboxgl from 'mapbox-gl';

import { InputMap } from "ui/input_text";
import styles from "./index.css";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3J2MDEzIiwiYSI6ImNsYXJlOXQ3aTFqdnQzd21xNGxmNDJlYnkifQ.LBfdUDCBiV3fi1eKByUlFQ';

// const Map = ReactMapboxGl({
//     accessToken:
//         "pk.eyJ1IjoiemFwYWlhZGV2IiwiYSI6ImNreTF1cnZ5YTBlcWMyd3NjbGhxcnV6ZmkifQ.ZmsUrIAbUSkznfj8e97tmQ",
// });
export function MapboxSeach(e) {
    const [location, setlocation] = myLocation();
    const initialCoords: any = [location.lat, location.lng];
    const [coords, setCoords] = useState(initialCoords);

    async function buscar(e) {
        e.preventDefault();
        const buscar = e.target.ubicacion.value;
        const data = await fetch(
            `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${buscar}&format=json`
        ).then((r) => r.json());
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        const newCoords = [lng, lat];
        setCoords(newCoords);
    }
    return (
        <div className={styles["__container"]}>
            <div className={styles["header"]}>Mapa de localización</div>
            <form onSubmit={buscar}>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "300px",
                        width: "100%",
                    }}
                    zoom={[14]}
                    center={coords}
                    movingMethod="flyTo">
                    <InputMap
                        type={"text"}
                        name={"ubicacion"}
                        placeholder="ej: La Rioja 1902, Mar del Plata"
                    />
                    {/* <Layer
                        type="symbol"
                        id="marker"
                        layout={{
                            "icon-image": "veterinary-11",
                            "icon-size": 1.5,
                        }}>
                        <Feature coordinates={coords} />
                    </Layer> */}
                </Map>
            </form>
            <div className={styles["footer"]}>ingrese su ubicacion y luego haga click afuera de la ventana !!!</div>
        </div>
    );
}
