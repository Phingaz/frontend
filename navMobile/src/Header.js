import React, { useState } from 'react'
import styled from "./Header.module.css"
import { Links } from './Links'

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
                <a href="/">logo</a>
            </h1>
            <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
                <ul className={styled.nav_links}>
                    {Links.map(link => {
                        return <li key={link.id}><a href={link.link}>{link.title}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}
