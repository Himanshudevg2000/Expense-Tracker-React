import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from './HomePage.module.css'

const Home = () => {
    return (
        <Fragment>
            <h1> Welcome to Expense Tracker </h1>
            <div className={classes.profile}>
                <ul className={classes.ul}>
                    <label htmlFor="message"> Your Profile is incomplete</label>
                    <Link to='/updateprofile' > <li className={classes.link} > Complete now </li></Link>
                </ul>
            </div>
        </Fragment>
    )
}

export default Home;