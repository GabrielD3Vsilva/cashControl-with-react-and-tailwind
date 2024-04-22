import CashCard from "./CashCard";

function Header () {
  return (
    <>
      <header className="bg-blue-950 w-screen">
        <h1 className="text-center md:text-2xl texl-xl text-white font-black py-5">Controlador de finanças</h1>

        <section className="flex justify-center">
          <CashCard textDescription="verba disponivel" value="1000000 reais"/>
          <CashCard textDescription="Verba comprometida" value="1000000 reais"/>

        </section>
      </header>
    </>
  )
}

export default Header;