import { useState } from "react";
import Header from "./components/header/Header";
import GetCashForm from "./components/GetCashForm";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";

function App ( ) {
  const [cash, setCash] = useState('0');
  const [expensesList, setExpensesList] = useState([]);
  const [cashExpense, setCashExpense] = useState(0);

  return (
    <div className="bg-gray-200 h-screen">
      <Header cash={cash} cashExpense={cashExpense}/>
      <GetCashForm setCash={setCash}/>
      <ExpensesForm expensesList={expensesList} setExpensesList={setExpensesList} setCash={setCash} cash={cash} cashExpense={cashExpense} setCashExpense={setCashExpense}/>
      <ExpensesList expensesList={expensesList} setExpensesList={setExpensesList} setCash={setCash} cash={cash}  setCashExpense={setCashExpense} cashExpense={cashExpense}/>
    </div>
  )
}

export default App;