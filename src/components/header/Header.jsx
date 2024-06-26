import CashCard from "./CashCard";

function Header ({cash, cashExpense}) {
  return (
    <>
      <header className="bg-blue-950 w-screen">
        <h1 className="text-center md:text-2xl texl-xl text-white font-black py-5">Controlador de finanças</h1>

        <section className="flex justify-center">
          <CashCard textDescription="verba disponivel" value={cash}/>
          <CashCard textDescription="Verba comprometida" value={cashExpense}/>
        </section>
      </header>
    </>
  )
}

export default Header;