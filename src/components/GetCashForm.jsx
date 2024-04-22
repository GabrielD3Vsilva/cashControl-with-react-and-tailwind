function GetCashForm ( ) {
    return (
        <>
            <h2 className="text-center tedxt-lg md:text-xl my-5 font-black">Digite a verba a ser administrada abaixo: </h2>
            <section className=" bg-blue-950 flex-wrap py-10 gap-4 flex justify-center w-1/2 mx-auto rounded-md">
                <input type="number" className="font-black rounded-md" placeholder="Digite a verba Inicial: "/>

                <button className="bg-blue-700 rounded-md px-2 py-1 font-bold text-white hover:bg-blue-900 transition-all ease-in-out">Adicionar verba</button>
            </section>
        </>
    )
}

export default GetCashForm;