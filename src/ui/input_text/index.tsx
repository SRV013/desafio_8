import React, { HTMLInputTypeAttribute } from "react";
import css from "./index.css";

type props = {
    type: HTMLInputTypeAttribute;
    name: string;
    value?: string;
    className?: string;
    required?: boolean;
    placeholder: string;
    readOnly?:boolean;
};

export function Input(p: props) {        
    return (
        <input
            type={p.type}
            name={p.name}
            defaultValue={p.value}
            className={css["input"]}
            required={p.required}
            placeholder={p.placeholder}
            readOnly={p.readOnly}
        />
    );
}
export function TextArea(p: props) {        
    return (
        <textarea
            type={p.type}
            name={p.name}
            defaultValue={p.value}
            className={css["textarea"]}
            required={p.required}
            placeholder={p.placeholder}
        />
    );
}