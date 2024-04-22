function CashCard ({textDescription, value}) {
    return (
        <>
            <section className="bg-gray-100">
                <h2>{textDescription}</h2>
                <h3>{value}</h3>
            </section>
        </>
    )
}

export default CashCard;