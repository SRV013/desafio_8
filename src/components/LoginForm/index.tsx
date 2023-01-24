import React from "react";
import { Input } from "../../ui/input_text/";
import { Button } from "../../ui/button";
import styles from "./login.css";

class LoginForm extends React.Component<any, any> {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const login = (e) => {
            e.preventDefault();
            this.props.onSearch(e.target.mail.value);
        };
        return (
            <form onSubmit={login} className={styles["login__container"]}>
                <Input type={"text"} name={"mail"} required></Input>
                <Input type={"password"} name={"pass"} required></Input>
                <Button name={"login"}>Ingresar</Button>
            </form>
        );
    }
}
export { LoginForm };

export function Comison(e) {
    console.log(e.texto, e.man);
    return <div><h1>soy el segundo</h1></div>;
}
