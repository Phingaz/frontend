import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "./RegisterUser.module.css"
import PopUp from "../components/PopUp"
import Wrapper from "../components/Wrapper"
import Loader from "../components/Loader"

const userLogin = {
  profile: "",
  firstName: "",
  lastName: "",
  cpf: "",
  curso: "",
  material: "",
  password: "",
  verifyPassword: "",
  message: ""
}

const dbResult = { id: Number, success: Boolean, message: String }

export default function RegisterUser() {

  const [user, setUser] = useState(userLogin)
  const [result, setResult] = useState(dbResult)
  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [popUp, setPopUp] = useState(false)

  const fetchData = async () => {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }
    const res = await fetch("https://centraldb.onrender.com/api/v1/unip/register", header)
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

  const submitForm = (e) => {
    e.preventDefault()
    if (user.profile === "") {
      user.message = "Please select a profile"
      setInvalid(true)
    }
    else if (user.password !== user.verifyPassword) {
      user.message = "Password do not match"
      setInvalid(true)
    }
    else if (user.password.trim().length === 0) {
      user.message = "Please enter password"
      setInvalid(true)
    }
    else if (user.cpf.trim().length === 0) {
      user.message = "Please enter cpf"
      setInvalid(true)
    }
    else {
      try {
        fetchData()
          .then(res => res.json())
          .then(data => {
            setLoading(false)
            setPopUp(true)
            setResult({
              id: data.genId,
              message: data.message,
              success: data.success
            })
          })
      } catch (error) { }
      finally {
        setLoading(true)
      }
    }
  }

  return <Wrapper>
    {loading && <Loader />}
    <div>
      {popUp && <PopUp info={result} />}
    </div>
    <form action="" method="" onSubmit={submitForm}>
      <h3>Register User</h3>

      <div className={styled.container}>
        <label htmlFor="fName">Profile </label>
        <select onChange={handleChange} name="profile">
          <option >Select</option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>
      </div>

      <div className={styled.container}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          placeholder="John"

        />
      </div>
      <div className={styled.container}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          placeholder="Doe"

        />
      </div>
      {
        user.profile === "student"
        &&
        <div className={styled.container}>
          <label htmlFor="curso">Curso</label>
          <input
            type="text"
            name="curso"
            onChange={handleChange}
            value={user.curso}
          />
        </div>
      }
      {
        user.profile === "professor"
        &&
        <div className={styled.container}>
          <label htmlFor="material">Material</label>
          <input
            type="text"
            name="material"
            onChange={handleChange}
            value={user.material}
          />
        </div>
      }
      <div className={styled.container}>
        <label htmlFor="cpf">Cpf</label>
        <input
          type="tel"
          name="cpf"
          onChange={handleChange}
          placeholder="123.456.789-00"
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
        <label htmlFor="verifyPassword">Verify password</label>
        <input
          type="password"
          name="verifyPassword"
          onChange={handleChange}
          value={user.verifyPassword}

        />
      </div>

      <div className={styled.container}>
        {invalid && <p className={styled.warning}>{user.message}</p>}
      </div>

      <div className={styled.container}>
        <button className={styled.button} type="submit">Register User</button>
        <p>Already Have an account? <Link to="/Login">Login</Link></p>
      </div>

    </form>

  </ Wrapper>
}
