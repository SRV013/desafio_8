import React from "react"
import css from "./footer.css"

export function Footer(){
return (
    <div className={css["footer-component__container"]}>
      <img className={css["header-component__logo"]} src="../src/assets/logo.png" />
        <div className={css["redes"]}>  
                <a >Instagram</a>
                <a >Facebook</a>
                <a >Github</a>
        </div>
    </div>
)
}