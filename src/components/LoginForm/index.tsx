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
//            this.props.onSearch(e.target.mail.value);
        };
        return (
            <form onSubmit={login} className={styles["__container"]}>
                <Input type={"text"} name={"mail"} placeholder="correo electrónico" required></Input>
                <Input type={"password"} name={"pass"} placeholder="ingrese password" required></Input>
                <Button name={"login"}>Ingresar</Button>
            </form>
        );
    }
}
export { LoginForm };
