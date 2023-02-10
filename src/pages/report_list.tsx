import React from "react";
import styles from "./pages.css";
import { ReportForm } from "components/ReportPet/report_list";

export function PetReport() {
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Vistes esta mascota</h1>
            <p className={styles["content__container__desciption"]}>
            Gracias por tu ayuda !!!
            </p>
            <ReportForm />
            <p className={styles["content__container__suggestion"]}>haga click para añadir una nueva ...</p>
        </div>
    );
}
