import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = async () => {
        await localStorage.clear();
        console.log("logged out successfully");
        navigate('/login');
    };

    return (
        <Fragment>
            <div className={classes.heading}>
                {auth ? <ul className={classes.ul}>
                    <Link to='/home' > <li className={classes.link}> Home </li></Link>
                    <Link to="/logout"> <button className={classes.logoutbtn} onClick={logout} > Logout </button> </Link>
                </ul>
                    :
                    <ul className={classes.ul}>
                        <Link to='/signup' > <li className={classes.link}> Signup </li> </Link>
                        <Link to='/login' > <li className={classes.link}>  Login </li> </Link>
                    </ul>
                }
            </div>
        </Fragment>
    )
}

export default Header;