import styled from "./NavBar.module.css"
import { useState } from "react"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [sh, setSh] = useState(false)

  const shoNa = () => {
    setSh(p => !p)
  }

  return (
    <header className={styled.header}>
      <button onClick={shoNa} className={`${styled.nav_btn} ${sh && styled.openb}`}>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>
      <h1>
        <NavLink
          className={({ isActive }) => isActive ? styled.active : styled.logo}
          to="/">Utility App</NavLink>
      </h1>
      <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
        <ul className={styled.nav_links}>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? styled.active : styled.link}
              to="/qrcode">
              QrCode
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? styled.active : styled.link}
              to="/linkshortner">
              Link Shortner
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? styled.active : styled.link}
              to="/rug">
              Random User Generator
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
