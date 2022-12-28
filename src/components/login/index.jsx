import React from "react";
import './Login-module.css';
import Label from "./Label/label";
import Inputnum from "./Inputs/inputnum";
import Button from "./Buttons/button";
import Inputpin from "./Inputs/inputpin";

const Login = () => {
    return (
        <div className="form-login">
            <div className="imagen">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisVXjlSG-dZAby7-MW36DtUyaO2U7TzCQXZCVBvMvZH9ZT9C9XJ55HeVwjAXI3mOgLQ&usqp=CAU" alt="logo"></img>
            </div>
            <hr></hr>
            <div className="labeleinputs">
                <Label text="Numero tarjeta" />
                <Inputnum />
                <Label text="PIN" />
                <Inputpin />
            </div>
            <Button />

        </div>
    )
};


export default Login;