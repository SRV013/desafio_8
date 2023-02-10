import React from "react";
import styles from "./pages.css";
import { MyReportForm } from "components/ReportPet/report_send";
export function ReportSend() {
    return (
        <div className={styles["containter"]}>
            <h1 className={styles["content__title"]}>Vistes esta mascota</h1>
            <p className={styles["content__container__desciption"]}>
            Ayudanos a encontrarla !!!
            </p>
            <MyReportForm />
            <p className={styles["content__container__suggestion"]}>
                haga click en guardar ...
            </p>
        </div>
    );
}
