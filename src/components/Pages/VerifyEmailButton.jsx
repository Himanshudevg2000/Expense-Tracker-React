import React from "react";
import { useNavigate } from "react-router-dom";
import VerifyEmailPage from "./VerifyEmailPage";

const VerifyEmailButton = ()=> {

    const navigate = useNavigate();

    let userDetail = JSON.parse(localStorage.getItem('user'))
    let id = userDetail.id
    let to = userDetail.email

    let collectData = async () => {
        try {
            let result = await fetch(`http://localhost:4000/api/v1/user/sendmail/${id}`, {
                method: "Post",
                body: JSON.stringify({ to }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            alert("Email sent")
            navigate('/verifyemailpage')
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    return(
        <button onClick={collectData} navigate={<VerifyEmailPage/>} >Verify Email</button>
    )
};

export default VerifyEmailButton;