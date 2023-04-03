import React, { Fragment, useState } from "react";
import classes from './Expense.module.css'

const Expense = () => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState('')

    const submitHandler = () => {
        setList(amount, description, category)
        console.log(amount, description, category);
    }

    // const expenseList = list.map((items) => {
    //     return (<ul>
    //         <li>{items.amount}</li>
    //         <li>{items.description}</li>
    //         <li>{items.category}</li>
    //     </ul>)
    // })


    return (
        <Fragment>
            <div className={classes.body}>

                <h2>All Expenses</h2>

                <label className={classes.label} htmlFor="amount">Total Amount</label>
                <input
                    className={classes.input}
                    type="number"
                    placeholder="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label className={classes.label} htmlFor="description">Description</label>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label className={classes.label} htmlFor="category">Category</label>
                <select
                    className={classes.select}
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="food">food</option>
                    <option value="games">games</option>
                    <option value="shopping">shopping</option>
                    <option value="travel">travel</option>
                    <option value="other">other</option>
                </select>
                <button className={classes.btn} onClick={submitHandler} >Add</button>
            </div>

            <div className={classes.box}>
                <h3>Expense List</h3>
                {/* {expenseList} */}
            </div>
        </Fragment>
    )
}

export default Expense;