import styled from "./Header.module.css"
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
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
                <HashLink
                    smooth
                    to="/#">
                    prosper
                </HashLink>
            </h1>
            <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
                <ul className={styled.nav_links}>
                    <li onClick={shoNa}>
                        <HashLink
                            smooth
                            to="#about">
                            About
                        </HashLink>
                    </li>
                    <li onClick={shoNa}>
                        <HashLink
                            smooth
                            to="#project">
                            Projects
                        </HashLink>
                    </li>
                    <li onClick={shoNa}>
                        <HashLink
                            smooth
                            to="#work">
                            Experience
                        </HashLink>
                    </li>
                    <li onClick={shoNa}>
                        <HashLink
                            smooth
                            to="/#contact">
                            Contact Me
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
