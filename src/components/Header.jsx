import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import classes from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.heading}>
                <ul className={classes.ul}>
                <Link to='/signup' > <li className={classes.link}> Signup </li> </Link> 
                <Link to='/login' > <li className={classes.link}>  Login </li> </Link>
                <Link to='/home' > <li className={classes.link}>  Home </li> </Link>
                </ul>
            </div>
        </Fragment>
    )
}

export default Header;