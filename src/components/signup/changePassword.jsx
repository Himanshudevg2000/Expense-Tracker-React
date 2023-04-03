import React, { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from './changePassword.module.css';

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [searchParams] = useSearchParams();

    let collectData = async (e) => {
        let email = searchParams.get('email')
        console.log(email);
        console.log(password);
        try {
            e.preventDefault();

            let result = await fetch(`http://localhost:4000/api/v1/user/changePassword?email=${email}`, {
                method: "Put",
                body: JSON.stringify({ email,password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            setPassword('');
            alert("Update Password successfully")
        }
        catch (error) {
            alert(error)
        }
    }


    return (
        <Fragment>
            <h2>Update Password</h2>
            <input
                className={classes.inputBox}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password" required
            />
            <input
                className={classes.inputBox}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" required
            />
            <button className={classes.btnSubmit} type="button" onClick={collectData}  >update</button>
        </Fragment>
    )
}

export default ChangePassword;