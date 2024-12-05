import Container from "./Container"

interface IFooter {
    className?: string
}

export default function Footer({className} : IFooter){


    return (
        <footer className={`${className} flex flex-row bg-zinc-700`}>
            <Container className="p-4">
                
            </Container>
        </footer>
    )
}