import React, { useEffect, useState } from "react";
import classes from './ProfileDetails.module.css'

const ProfileDetails = () => {

    let [fullName, setFullName] = useState(false);
    let [profilePhoto, setProfilePhoto] = useState(false);

    let id = JSON.parse(localStorage.getItem('user'))
    id = id.id

    let data;

    let collectData = async () => {
        try {
            let result = await fetch(`http://localhost:4000/api/v1/user/getProfile/${id}`);
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            data = await result.json();
            console.log(data)
            fullName = setFullName(data.data.fullName)
            profilePhoto = setProfilePhoto(data.data.profileUrl)
            // console.log(result);
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    useEffect(()=> {
        collectData()
    },[])

    return (
        <div className={classes.box}>
            <div className={classes.details}>
                <label className={classes.label} htmlFor="name">FullName: </label>
                <span>{fullName}</span>
            </div>
            <div className={classes.details}>
                <label className={classes.label} htmlFor="profilephoto">Profile Photo: </label>
                <span>{profilePhoto}</span>
            </div>
        </div>
    )
}

export default ProfileDetails;