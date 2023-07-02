import '../index.css'
import Wrapper from '../components/Wrapper'
import Time from '../components/Time'
import styled from "./Home.module.css"
import { useContext } from 'react'
import Auth from '../store/auth-context'


function Home() {
  const auth = useContext(Auth)

  return (
    <Wrapper>
      {
        auth.loggedIn &&
        <>
          <div class={styled.context}>
            <div>
              <h1 className={styled.h1}>Hi {auth.dbResult.fName}</h1>
              <p>The time is: <Time /></p>
              <button className={styled.btn} onClick={() => { auth.onlogOut() }}>Logout</button>
            </div>
          </div>


          <div class={styled.area} >
            <ul class={styled.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div >
        </>
      }

    </Wrapper>
  )
}

export default Home

export const startServer = () => {
  fetch("https://unip-f48p.onrender.com")
  return null
}
