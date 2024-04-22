function ExpensesList ({expensesList}) {
    return (
        <>
            <section className="bg-blue-950">
                <h2 className="text-center text-lg text-white font-bold md:text-xl p-4">Listagem de suas despezas</h2>
                <ul className="">
                    {expensesList.map((expense,index)=>(
                        <>
                            <li key={index} className="text-center font-bold text-white text-base md:text-lg">{expense.expenseName} - custa: {expense.expenseValueObj} Reais</li>
                        </>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default ExpensesList;