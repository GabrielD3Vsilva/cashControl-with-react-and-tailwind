function ExpensesList ({setExpensesList, expensesList, setCash, cash, cashExpense, setCashExpense}) {
    const removeItem = (id) => {
        const newExpense = [...expensesList];
        const filterExpenses = newExpense.filter((expense)=>expense.id!==id ? expense : null)
        setExpensesList(filterExpenses);
        incrementCash(id);

        decrementCashExpense (id);

    }

    const incrementCash = (id) => {
        for( let i = 0; i < expensesList.length; i++ ) {
            if(expensesList[i].id == id) {
                setCash( Number(cash) + Number(expensesList[i].expenseValueObj));
            } else {
                return;
            }
        }
    }

    const decrementCashExpense = (id) => {
        for( let i = 0; i < expensesList.length; i++ ) {
            if(expensesList[i].id == id) {
                setCashExpense(cashExpense - Number(expensesList[i].expenseValueObj));
            } else {
                return;
            }
        }
    }

    return (
        <>
            <section className="bg-blue-950">
                <h2 className="text-center text-lg text-white font-bold md:text-xl p-4">Listagem de suas despezas</h2>
                <ul>
                    {expensesList.map((expense)=>(
                        <>
                            <li key={expense.id} className="text-center font-bold text-white text-base md:text-lg my-2">{expense.expenseName} - custa: {expense.expenseValueObj} Reais              <button onClick={( )=>removeItem(expense.id)} className="bg-blue-700 px-2 py-1 font-bold text-white hover:bg-blue-900 transition-all ease-in-out mx-2">Remover</button></li>

                        </>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default ExpensesList;