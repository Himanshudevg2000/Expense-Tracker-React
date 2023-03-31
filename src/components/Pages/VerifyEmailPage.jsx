import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmailPage =()=> {

    const [otp,setOtp] = useState('')

    let userDetail = JSON.parse(localStorage.getItem('user'))
    let id = userDetail.id
    console.log(id)
    const navigate = useNavigate();

    let collectData = async () => {
        try {
            let result = await fetch(`http://localhost:4000/api/v1/user/verifyEmail/${id}`, {
                method: "Put",
                body: JSON.stringify({ otp }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            alert("Email verified")
            navigate('/home')
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    return(
        <Fragment>
            <div >
                <h3>Email Verification</h3>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter otp" />
                <button onClick={collectData} >Verify</button>
            </div>
        </Fragment>
    )
};

export default VerifyEmailPage;