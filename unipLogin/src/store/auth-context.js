import { createContext, useState } from "react";


const Auth = createContext({})

export function AuthContextProvider(props) {
    const [auth, setAuth] = useState(false)
    const [result, setResult] = useState({})

    const logIn = (data) => {
        setAuth(true)
        setResult(data)
    }
    const logOut = () => {
        setAuth(false)
    }

    return (
        <Auth.Provider value={{
            dbResult: result,
            loggedIn: auth,
            OnLogIn: logIn,
            onlogOut: logOut
        }}>
            {props.children}
        </Auth.Provider>
    )
}

export default Auth