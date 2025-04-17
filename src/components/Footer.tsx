import Container from "./Container"

interface IFooter {
    className?: string
}

export default function Footer({className} : IFooter){


    return (
        <footer className={`${className} flex flex-row bg-zinc-700`}>
            <Container className="p-4">
                <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
                    <div className={``}>
                        <h4>Questions?</h4>
                        <p></p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}