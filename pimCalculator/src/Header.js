import { useState } from "react"
import styled from "./Header.module.css"

export const Header = () => {


    const [first, setfirst] = useState(false)
    const sh = () => {
        setfirst(p => !p)
    }

  return (
      <header className={styled.header}>
          <h1>
              <a href='/'>unip</a>
          </h1>

          <button onClick={sh} className={`${styled.show_nav} ${first ? styled.open_nav : styled.close_nav}`}>
              <span className={styled.ham}></span>
              <span className={styled.ham}></span>
              <span className={styled.ham}></span>
          </button>

          <nav className={`${styled.nav} ${first ? styled.open : styled.close}`}>
              <div className={styled.nav_links}>
                  <a href='/#'>Log In</a>
                  <a href='/#'>Log Out</a>
              </div>

          </nav>
      </header>
  )
}
