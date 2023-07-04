import styled from "./Home.module.css"
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';
import { Reveal } from "./Reveal";

export const Home = () => {
    return (
        <div id="#" className={styled.home}>
            <div className={styled.name}>
                <Reveal delay={0.25}>
                    <h1 className={styled.highlight}>MY NAME IS</h1>
                </Reveal>
                <Reveal delay={0.5}>
                    <h1 className={styled.accent}>PROSPER<span>.</span></h1>
                </Reveal>
                <div className={styled.info}>
                    <p>I </p><Typewriter
                        options={{
                            strings: ['am a frontend developer', 'design beautiful things for the web', 'am available for jobs, freelance and contributions, feel free to contact me 😉.'],
                            pauseFor: 3000,
                            deleteSpeed: 30,
                            delay: 40,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <Reveal delay={0.75}>
                    <HashLink
                        smooth
                        to="#contact">
                        <button>CONTACT ME</button>
                    </HashLink>
                </Reveal>
            </div>

            <Reveal delay={1}>
                <div className={styled.icons}>
                    <a className={styled.icons_item} href="https://www.linkedin.com/in/piinoya/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className={styled.icons_item} href="https://piicv.netlify.app">
                        <i className="fa-solid fa-briefcase"></i ></a>
                    <a className={styled.icons_item} href="https://github.com/Phingaz?tab=repositories">
                        <i className="fab fa-github"></i></a>
                    <a className={styled.icons_item} href="https://drive.google.com/open?id=15eY5MRMyCgX72kLKZ5XGpcOY7r0K_pMt&authuser=piinoya%40gmail.com&usp=drive_fs">
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                </div>
            </Reveal>
        </div>
    )
}