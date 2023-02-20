import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {title:'Car Loan', amount: 2050000, date: new Date(2022, 7, 20)},
    {title:'Credit Card', amount: 55000, date: new Date(2022, 7, 22)},
    {title:'Rappi Dinner Sushi', amount: 70000, date: new Date(2022, 7, 22)},
    {title:'Game', amount: 40000, date: new Date(2022, 7, 23)}
  ];

  const addExpenseHandler = (expense) => {
    console.log("IN APP.JS");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses data = {expenses}/>
    </div>
  );
}

export default App;
