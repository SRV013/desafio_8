import React from "react";
import sytle from "./pages.css";
export function LoadingSpinner() {
    return (
        <div className={sytle["spinner-container"]}>
            <div className={sytle["loading-spinner"]}></div>
        </div>
    );
}
