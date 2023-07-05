import Wrapper from "../components/Wrapper"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { ContactMe } from "../components/ContactMe"
import { Work } from "../components/Work"

export const Landing = () => {
    return (
        <Wrapper>
            <div className="landing">
                <Home />
                <About />
                <Projects />
                <Work />
                <ContactMe />
            </div>
        </Wrapper>
    )
}

export const startServer = () => {
    fetch("https://centraldb.onrender.com/api/v1/email")
    return null
}