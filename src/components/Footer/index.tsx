import React from "react"
import style from "./footer.css"
export function Footer(){
 return (
    <div className={style["footer-component__container"]}>
      <img className={style["header-component__logo"]} src="../src/assets/logo.png" />
        <div className={style["redes"]}>  
                <a >Instagram</a>
                <a >Facebook</a>
                <a >Github</a>
        </div>
    </div>
)
}