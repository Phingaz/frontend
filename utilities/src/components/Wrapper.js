import {NavBar} from "./NavBar"
import { Footer } from "./Footer"

function Wrapper(props) {

    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default Wrapper
