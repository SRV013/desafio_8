import React, { HTMLInputTypeAttribute, useState } from "react";
import css from "./index.css";

type props = {
    type: HTMLInputTypeAttribute;
    className?: string;
    name: string;
    value?: string;
    required?: boolean;
    placeholder: string;
};

export function Input(p: props) {
    const [val, setVal] = useState("");
    return (
        <input
            type={p.type}
            name={p.name}
            className={css["input"]}
            defaultValue={val || ""}
            required={p.required}
            placeholder={p.placeholder}
        />
    );
}