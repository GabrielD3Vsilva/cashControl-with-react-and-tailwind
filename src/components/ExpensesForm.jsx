function ExpensesForm ( ) {
    return (
        <>
            <section className="my-5 bg-blue-950 w-2/3 mx-auto p-2">
            <h2 className="text-center md:text-xl text-lg font-bold text-white">Adicione as suas despezas</h2>
                <div className="flex justify-center mx-auto my-4">
                    <form>
                        <div className="flex gap-2 flex-wrap font-bold">
                            <input type="text" placeholder="Nome da despeza" />
                            <input type="number" placeholder="Custo da despeza" />
                        </div>


                        <input type="submit" value="Adicionar despeza" className="bg-blue-700 px-2 py-1 font-bold text-white hover:bg-blue-900 transition-all ease-in-out my-2"/>
                    </form>
                </div>
                

            </section>
        </>
    )
}

export default ExpensesForm;