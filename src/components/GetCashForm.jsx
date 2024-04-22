import { useRef } from "react";

function GetCashForm ({setCash}) {
    const cashRef = useRef(null);

    function handlerCash ( ) {
        setCash(cashRef.current.value);
    }


    return (
        <>
            <h2 className="text-center tedxt-lg md:text-xl my-5 font-black">Digite a verba a ser administrada abaixo: </h2>
            <section className=" bg-blue-950 flex-wrap py-10 gap-4 flex justify-center w-2/3 mx-auto">
                <input type="number" className="font-black md:px-1" placeholder="Digite a verba Inicial: " ref={cashRef}/>

                <button className="bg-blue-700 px-2 py-1 font-bold text-white hover:bg-blue-900 transition-all ease-in-out" onClick={handlerCash}>Adicionar verba</button>
            </section>
        </>
    )
}

export default GetCashForm;