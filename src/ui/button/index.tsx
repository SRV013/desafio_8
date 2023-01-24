import React ,{ useState, useEffect} from "react"
import css from "./index.css"

type props = {
    className?: string
    value?: string
    name: string
    children:string
}
export function Button(props) {
    return <button 
    className={css["button"]}
    name={props.name} 
    value={props.value}
    onClick={props.onClick}
    >{props.children}</button>
}