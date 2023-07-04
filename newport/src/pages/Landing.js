import Wrapper from "../components/Wrapper"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { ContactMe } from "../components/ContactMe"

export const Landing = () => {
    return (
        <Wrapper>
            <div className="landing">
                <Home />
                <About />
                <Projects />
                <ContactMe />
            </div>
        </Wrapper>
    )
}