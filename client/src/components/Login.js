import React from "react";
import { useState } from "react";
import axiosWithAuth from "../utils/axiousWithAuth";

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const onChangeHandler = e => {
        return setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("bubbles");
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={onChangeHandler} />
                <input
                    type="password"
                    name="password"
                    onChange={onChangeHandler}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
