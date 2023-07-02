import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "./RegisterUser.module.css"
import Wrapper from "../components/Wrapper"
import Loader from "../components/Loader"
import PopUp from "../components/PopUp"
import Auth from "../store/auth-context"

const userLogin = {
  profile: "",
  cpf: "",
  password: "",
  message: "",
}

const dbResult = {
  id: Number,
  message: String,
  success: Boolean
}

export default function Login() {

  const [user, setUser] = useState(userLogin)
  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(dbResult)
  const [popUp, setPopUp] = useState(false)

  const auth = useContext(Auth)

  const fetchData = async () => {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }
    const res = await fetch("https://unip-f48p.onrender.com/login", header)
    return res
  }

  const handleChange = (e) => {
    setInvalid(false)
    setPopUp(false)
    const { name, value } = e.target
    setUser(prev => ({
      ...user,
      [name]: value
    }))
  }

  const logIn = (data) => {
    auth.OnLogIn(data)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (user.cpf.trim().length === 0) {
      setInvalid(true)
      user.message = "Please enter your cpf"
    } else if (user.password.trim().length === 0) {
      setInvalid(true)
      user.message = "Please enter your password"
    } else if (user.profile === "") {
      setInvalid(true)
      user.message = "Please choose a profile"
    }
    else {
      try {
        fetchData()
          .then(res => res.json())
          .then(data => {
            if(data.success) {
              logIn(data)
              setLoading(false)
              setResult(prev => ({
                id: data.genId,
                message: data.message,
                success: data.success
              }))
              setPopUp(true)
            }
            setLoading(false)
            setResult(prev => ({
              id: data.genId,
              message: data.message,
              success: data.success
            }))
            setPopUp(true)
          })
      } catch (error) {
      } finally {
        setLoading(true)
      }
    }
  }


  return <Wrapper>
    {loading && <Loader />}
    {popUp && <PopUp info={result} />}
    <form action="" method="" onSubmit={submitForm}>
      <h3>Login</h3>

      <div className={styled.container}>
        <label htmlFor="fName">Profile </label>
        <select onChange={handleChange} name="profile">
          <option >Select</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>
      </div>


      <div className={styled.container}>
        <label htmlFor="cpf">Cpf</label>
        <input
          type="tel"
          name="cpf"
          onChange={handleChange}
          placeholder="123.456.789-00"
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
          value={user.cpf}
        />
      </div>
      <div className={styled.container}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </div>

      <div className={styled.container}>
        {invalid && <p className={styled.warning}>{user.message}</p>}
      </div>

      <div className={styled.container}>
        <button className={styled.button} type="submit">Login</button>
        <p>Don't have an account?
          <Link to="/register"> Signup</Link> <br />
          <Link to="/recover" style={{ fontSize: 10, opacity: 0.5}}>Forgot Password</Link>
        </p>
      </div>

    </form>

  </Wrapper>
}
