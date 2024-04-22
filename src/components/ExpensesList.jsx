function ExpensesList ({expensesList}) {
    return (
        <>
            <section>
                <ul>
                    {expensesList.map((expense,index)=>(
                        <>
                            <li key={index}>{expense.expenseName}</li>
                        </>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default ExpensesList;