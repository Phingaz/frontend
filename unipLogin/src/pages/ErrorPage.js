import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Page in development</h1>
            <button onClick={ () => {navigate("/")}}>Home</button>
        </>
    )
}