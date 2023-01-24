import React, { HTMLInputTypeAttribute, useState } from "react"
import css from "./index.css"

type props = {
    type: HTMLInputTypeAttribute
    className?: string
    value?: string
    required?: boolean
    name: string
}

export function Input(p:props) {
    const [val, setVal] = useState("")
    return <input 
    required={p.required} 
    className={css["input"]} 
    type={p.type} 
    defaultValue={val || ""} 
    name={p.name}/>
}