import React, { Fragment, useEffect, useState } from "react";
import classes from './Expense.module.css'

const Expense = () => {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [addexpense, setAddExpense] = useState([]);
    const [editbutton, setEditButton] = useState(false);
    const [editId,setEditId] = useState('')

    let userDetail = JSON.parse(localStorage.getItem('user'))
    let id = userDetail.id
    // console.log(id)

    let addExpenseHandler = async (e) => {
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
            alert("Expense added")
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    let data;
    let getExpenseHandler = async () => {
        try {
            let result = await fetch('http://localhost:4000/api/v1/expense/getexpense/642567fe5bdb7d1c3ccbfbcd')
            data = await result.json();
            // console.log(data)
            const datalist = data.data.map((items) => {
                return {
                    id: items._id,
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
        getExpenseHandler()
    }, []);

    const deleteExpenseHandler = async (id) => {
        // console.log(id)
        try {
            let result = await fetch(`http://localhost:4000/api/v1/expense/deleteexpense/${id}`, {
                method: "delete",
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            alert("Expense deleted")
        }
        catch (error) {
            alert("something went wrong")
        }
    }

    const editExpenseChangesHandler = async (id, amount, description, category) => {
        console.log(id);
        setEditId(id)
        setAmount(amount);
        setDescription(description);
        setCategory(category);
        setEditButton(true)
    }

    const editExpenseHandler = async () => {
        console.log(editId)
        try {
            let result = await fetch(`http://localhost:4000/api/v1/expense/updateexpense/${editId}`, {
                method: "Put",
                body: JSON.stringify({ amount, description, category }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!result.ok) {
                throw new Error('Something went wrong')
            }
            result = await result.json();
            console.log(result);
            alert("Expense updated")
            setAmount("");
            setDescription("");
            setCategory("");
        }
        catch (error) {
            alert("something went wrong")
        }
    }


    const expenseList = addexpense.map((items) => {
        return (
            <div>
                <div className={classes.expensediv}>
                    {/* <ul className={classes.expenseul} >{items.id}</ul> */}
                    <ul className={classes.expenseul} >{items.amount}</ul>
                    <ul className={classes.expenseul}>{items.description}</ul>
                    <ul className={classes.expenseul}>{items.category}</ul>
                    <button onClick={() => deleteExpenseHandler(items.id)}  >delete</button>
                    <button onClick={() => editExpenseChangesHandler(items.id, items.amount, items.description, items.category)} >edit</button>
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
                <button className={classes.btn} onClick={addExpenseHandler} >Add</button>
                {editbutton && <button className={classes.btn} onClick={editExpenseHandler} >Edit</button>}
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