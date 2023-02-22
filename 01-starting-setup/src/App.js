import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {title:'Car Loan', amount: 2050000, date: new Date(2022, 7, 20)},
  {title:'Credit Card', amount: 55000, date: new Date(2022, 7, 22)},
  {title:'Rappi Dinner Sushi', amount: 70000, date: new Date(2022, 7, 22)},
  {title:'Game', amount: 40000, date: new Date(2022, 7, 23)}
];

function App() { 

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
  });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses data = {expenses}/>
    </div>
  );
}

export default App;
