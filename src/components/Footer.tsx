import Container from "./Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

interface IFooter {
    className?: string
}

export default function Footer({className} : IFooter){


    return (
        <div className={`${className ? className : ''} flex flex-row bg-zinc-700 mt-24 text-white`}>
            <Container className="p-4">
                <div className={`grid xs:grid-cols-4`}>
                    <div className={``}>
                        <h2 className="text-3xl">Questions?</h2>
                        <p className="mt-3">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4" />
                            support@skimspots.com
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}