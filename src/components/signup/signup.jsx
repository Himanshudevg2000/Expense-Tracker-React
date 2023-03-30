import React, { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from './signup.module.css'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    let collectData
    if (password === confirmPassword) {
        collectData = async (e) => {
            setError('null')
            try {
                e.preventDefault()
                console.warn(email, password, confirmPassword);
                let result = await fetch("http://localhost:4000/api/v1/user/signup", {
                    method: "POST",
                    body: JSON.stringify({ email, password }),
                    headers: {
                        "Content-Type": "application/json",
                        // "Content-Type": "text/plain"
                    },
                });
                if (!result.ok) {
                    throw new Error('Something went wrong')
                }
                result = await result.json();
                navigate('/login')
                console.log(result);
            }
            catch (error) {
                setError(error.message)
                console.log(error)
            }
        }
    }

    return (
        <Fragment>
            <h1 className={classes.h1}>SIGNUP PAGE</h1>

            <div >
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
                <input
                    className={classes.inputBox}
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                <button className={classes.btnSubmit} type="button" onClick={collectData} >SignUp</button>
            </div>
            <div>
            {error && <p> {error} </p>}
            </div>
        </Fragment>
    )
}

export default Signup;