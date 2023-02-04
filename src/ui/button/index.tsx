import React  from "react"
import css from "./index.css"

type props = {
    className?: string
    value?: string
    name?: string
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
export function ButtonV2(props) {
    return <button 
    className={css["buttonv2"]}
    name={props.name} 
    value={props.value}
    onClick={props.onClick}
    type={props.type}
    >{props.children}</button>
}
export function ButtonSmall(props) {
    return <button 
    className={css["small__button"]}
    name={props.name} 
    value={props.value}
    onClick={props.onClick}
    type={props.type}
    >{props.children}</button>
}