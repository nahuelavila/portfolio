export function Skill({ name, level }) {
    return(
        <section className="container rounded-md border-4 border-sky-300 mb-2">
            <p className="">{name} - {level}</p>
        </section>
    )
}