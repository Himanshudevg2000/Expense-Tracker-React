import React, { useState, Fragment } from "react";
import classes from './UpdateProfile.module.css';

const UpdateProfile = () => {

    const [fullName, setFullName] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    let id = JSON.parse(localStorage.getItem('user'))
    id = id.id
    console.log(id)

    let collectData = async () => {
        try {
            console.warn(fullName, profileUrl);
            let result = await fetch(`http://localhost:4000/api/v1/user/updateProfile/${id}`, {
                method: "Put",
                body: JSON.stringify({ fullName, profileUrl }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            setFullName('');
            setProfileUrl('');
            alert("Update successfully")
        }
        catch (error) {
            alert("something went wrong")
        }
    }



    return (
        <Fragment>
            <div className={classes.contactdetails}>
                <h2>Contact Details</h2>
                <div>
                    <label className={classes.label} htmlFor="name">Full Name : </label>
                    <input
                        className={classes.inputBox}
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name" required
                    />
                    <label className={classes.label} htmlFor="photo"> Profile Photo Url : </label>
                    <input
                        className={classes.inputBox}
                        type="text"
                        value={profileUrl}
                        onChange={(e) => setProfileUrl(e.target.value)}
                        placeholder="Profile Photo" required
                    />
                    <button className={classes.updatebtn} onClick={collectData} >Update</button>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateProfile;