// import ExpenseItem from "./components/Expenses/ExpenseItem";
import './components/NewExpense/NewExpense';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    // <h3 className="text-white bg-black">Darling Don't you Cry</h3>
    <div>
      {/* <ExpenseDate month='Jan' date='2' year='2022' /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpenseItem month='Jan' date='16' year='2021' title='Car Insurance' price='300' />
      <ExpenseItem month='Jan' date='19' year='2021' title='Cake' price='100' /> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
