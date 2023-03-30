import React, { useState } from "react";
import { Fragment } from "react";
import classes from './signup.module.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    let collectData = async (e) => {
        setError(null);
        try {
            e.preventDefault()
            console.warn(email, password);
            let result = await fetch("http://localhost:4000/api/v1/user/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
        }
        catch (error) {
            setError(error.message)
            console.log(error)
        }
    }



    return (
        <Fragment>
            <h1 className={classes.h1}>LOGIN PAGE</h1>
            <div>
                <input
                    className={classes.inputBox}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" required
                />
                <input
                    className={classes.inputBox}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" required
                />
                <button className={classes.btnSubmit} type="button" onClick={collectData} >login</button>
            </div>

            <div>
            {error && <p> {error} </p>}
            {/* {!error && } */}
            </div>

        </Fragment>
    )
}

export default Login;