function ExpensesList ({setExpensesList, expensesList}) {
    const removeItem = (id) => {
        const newExpense = [...expensesList];

        const filterExpenses = newExpense.filter((expense)=>expense.id!==id ? expense : null)

        setExpensesList(filterExpenses);

    }

    return (
        <>
            <section className="bg-blue-950">
                <h2 className="text-center text-lg text-white font-bold md:text-xl p-4">Listagem de suas despezas</h2>
                <ul className="">
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