import { useState } from "react";

function ExpensesForm ({expensesList, setExpensesList, cash, setCash}) {
    const [expense, setExpense] = useState('');
    const [expenseValue, setExpenseValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault( );
        if(!expense || !expenseValue) return;

        addExpenseItem( );
        setCash(Number(cash) - Number(expenseValue));
        
    }

    const addExpenseItem = ( ) => {

        const newExpense = {
            id: Math.random()*10000,
            expenseName: expense,
            expenseValueObj: expenseValue
        }

        setExpensesList([...expensesList, newExpense]);

        
        
    }

    return (
        <>
            <section className="my-5 bg-blue-950 w-2/3 mx-auto p-2">
            <h2 className="text-center md:text-xl text-lg font-bold text-white">Adicione as suas despezas</h2>
                <div className="flex justify-center mx-auto my-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-2 flex-wrap font-bold">
                            <input type="text" placeholder="Nome da despeza" onChange={(e)=>setExpense(e.target.value)}/>
                            <input type="number" placeholder="Custo da despeza" onChange={(e)=>setExpenseValue(e.target.value)}/>
                        </div>


                        <input type="submit" value="Adicionar despeza" className="bg-blue-700 px-2 py-1 font-bold text-white hover:bg-blue-900 transition-all ease-in-out my-2"/>
                    </form>
                </div>
                

            </section>
        </>
    )
}

export default ExpensesForm;