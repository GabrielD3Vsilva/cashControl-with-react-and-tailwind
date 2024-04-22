function CashCard ({textDescription, value}) {
    return (
        <>
            <section className="bg-gray-100 w-1/2 border-2 border-blue-950 text-center rounded-md">
                <h2 className="md:text-xl font-black">{textDescription}</h2>
                <h3>{value} Reais</h3>
            </section>
        </>
    )
}

export default CashCard;