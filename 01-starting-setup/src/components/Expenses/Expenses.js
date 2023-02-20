import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import React, {useState} from "react";

function Expenses (props)
{

    const [filteredYear, setFilteredYear] = useState('2020');

    const FilterDataByDate = (date) => {
        console.log(date);
        setFilteredYear(date);
    };

    return(
        <div>
            <ExpensesFilter selected = {filteredYear} onFilterDateSet = {FilterDataByDate}/>
            <Card className="expenses">
            <ExpenseItem title = {props.data[0].title} amount = {props.data[0].amount} date = {props.data[0].date} />
            <ExpenseItem title = {props.data[1].title} amount = {props.data[1].amount} date = {props.data[1].date}/>
            <ExpenseItem title = {props.data[2].title} amount = {props.data[2].amount} date = {props.data[2].date}/>
            <ExpenseItem title = {props.data[3].title} amount = {props.data[3].amount} date = {props.data[3].date}/>
        </Card>
        </div>
        
    );
}

export default Expenses;