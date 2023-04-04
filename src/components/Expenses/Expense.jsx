import React, { Fragment, useEffect, useState } from "react";
import classes from './Expense.module.css'

const Expense = () => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState(false)
    const [addexpense, setAddExpense] = useState([])

    let userDetail = JSON.parse(localStorage.getItem('user'))
    let id = userDetail.id
    console.log(id)


    let collectData = async (e) => {
        try {
            e.preventDefault();
            let result = await fetch("http://localhost:4000/api/v1/expense/addexpense", {
                method: "Post",
                body: JSON.stringify({ userId: id, amount, description, category }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            setList(true)
            alert("Expense added")
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    let data;
    let apiHandler = async () => {
        try {
            let result = await fetch('http://localhost:4000/api/v1/expense/getexpense/642567fe5bdb7d1c3ccbfbcd')
            data = await result.json();
            // console.log(data)
            const datalist = data.data.map((items) => {
                return {
                    amount: items.amount,
                    description: items.description,
                    category: items.category,
                }
            })
            setAddExpense(datalist)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        apiHandler()
    }, []);
    console.log(addexpense)

    const expenseList = addexpense.map((items) => {
        return (
            <div>
                <div className={classes.expensediv}>
                    <ul className={classes.expenseul} >{items.amount}</ul>
                    <ul className={classes.expenseul}>{items.description}</ul>
                    <ul className={classes.expenseul}>{items.category}</ul>
                </div>
            </div>
        )
    })

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
                <button className={classes.btn} onClick={collectData} >Add</button>
            </div>

            <div className={classes.box}>
                <h3>Expense List</h3>
                <h4>Amount</h4>
                <h4>Description</h4>
                <h4>Category</h4>
                {expenseList}
            </div>
        </Fragment>
    )
}

export default Expense;