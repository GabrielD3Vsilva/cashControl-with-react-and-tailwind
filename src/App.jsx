import { useState } from "react";
import Header from "./components/header/Header";
import GetCashForm from "./components/GetCashForm";
import ExpensesForm from "./components/ExpensesForm";

function App ( ) {
  const [cash, setCash] = useState('0');

  return (
    <div className="bg-gray-200 h-screen">
      <Header cash={cash}/>
      <GetCashForm setCash={setCash}/>
      <ExpensesForm/>
    </div>
  )
}

export default App;