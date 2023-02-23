import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [showForm, setShowForm] = useState(false);
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) =>{
            return {...prevState, enteredTitle: event.target.value};
        });

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    };

    const amountChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        setUserInput((prevState) =>{
            return {...prevState, enteredAmount: event.target.value};
        });
    }

    const dateChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        setUserInput((prevState) =>{
            return {...prevState, enteredDate: event.target.value};
        });
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate  + 'T00:00:00')
        };
        
        props.onSaveExpenseData(expenseData);

        setUserInput({enteredDate:"", enteredAmount:"", enteredTitle:""});
        setShowForm(false);
    };

    const showHandler = () => {
        setShowForm(true);
    }

    const cancelHandler = () => {
        setShowForm(false);
    }

    if(!showForm)
    {
        return(
                <div className = "new-expense__action">
                    <button type = "submit" onClick ={showHandler}>Add New Expense</button>
                </div>   
                )
    }

    return( 
    <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type="text" value = {userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" value = {userInput.enteredAmount} min = "0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" value = {userInput.enteredDate} min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "button" onClick = {cancelHandler}>Cancel</button>
            <button type = "submit">Add Expense</button>
        </div>
    </form>)
};

export default ExpenseForm;