import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './changePassword.module.css';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        setEmail(e.target.value)
        console.log(email)
        navigate(`/changePassword?email=${email}`)
    }

    return (
        <Fragment>
            <h1>Forget Password</h1>
            <input
                className={classes.inputBox}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Mail..."
            />
            <button className={classes.btnSubmit} onClick={submitHandler} >submit</button>
        </Fragment>
    )
}

export default ForgetPassword;