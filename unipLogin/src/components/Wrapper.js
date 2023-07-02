import NavBar from "./NavBar"

function Wrapper(props) {

    return (
        <>
            <NavBar />
            {props.children}
        </>
    )
}

export default Wrapper
