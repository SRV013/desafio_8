import React, { useRef, useEffect, useState } from "react";
import { myLocation } from "hooks/index";
import mapboxgl from "mapbox-gl";
import { InputMap } from "ui/input_text";
import styles from "./index.css";
import { getCoordsFromLocation , MAPBOX_TOKEN} from "./coords";
mapboxgl.accessToken = MAPBOX_TOKEN;
export function MapboxSeach(e) {
    const [location, setlocation] = myLocation();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(location.lat);
    const [lat, setLat] = useState(location.lng);
    const [zoom, setZoom] = useState(9);

    async function buscar(e) {
        e.preventDefault();
        const buscar = e.target.ubicacion.value
        const features: any = await getCoordsFromLocation(buscar);
        if (!map.current) return;
        const [lng, lat] = features;
        await map.current.flyTo({
          center: [lng, lat],
          zoom: 15,
          speed: 0.6,
          curve: 2,
        })
    }
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    return (
        <div className={styles["__container"]}>
            <div className={styles["header"]}>Mapa de localización</div>
            <form onSubmit={buscar}>
                <div>
                    <div className={styles["sidebar"]}>
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>
                    <div
                        ref={mapContainer}
                        className={styles["map-container"]}
                    />
                </div>
                <InputMap
                    type={"text"}
                    name={"ubicacion"}
                    placeholder="ej: La Rioja 1902, Mar del Plata"
                />
            </form>
            <div className={styles["footer"]}>
                Luego de obtener su ubicacion haga click afuera de la ventana !!!
            </div>
        </div>
    );
}
