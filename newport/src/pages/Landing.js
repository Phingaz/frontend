import Wrapper from "../components/Wrapper"
import { Home } from "../components/Home"
import { About } from "../components/About"

export const Landing = () => {
    return (
        <Wrapper>
            <div className="landing">
                <Home />
                <About />
            </div>
        </Wrapper>
    )
}