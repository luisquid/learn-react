import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses (props)
{

    const [filteredYear, setFilteredYear] = useState('2020');

    const FilterDataByDate = (date) => {
        console.log(date);
        setFilteredYear(date);

    };
    
    const filteredExpenses = props.data.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected = {filteredYear} onFilterDateSet = {FilterDataByDate}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
        </div>
        
    );
}

export default Expenses;