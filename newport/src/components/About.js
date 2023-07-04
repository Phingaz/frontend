import styled from "./About.module.css"
import { techs, courses } from "./data"
import { FadeIn, SlideLeft, SlideRight } from "./Reveal"
import { workflows } from "./data"

export const About = () => {
    return (
        <div id="about" className={styled.about}>
            <div className={styled.container}>
                <FadeIn delay={0.2}>
                    <h1>About<span>.</span> <hr /></h1>
                </FadeIn>

                <div className={styled.section}>
                    <aside className={styled.aside_text}>
                        <SlideLeft delay={0.22}>
                            <p>
                                I am a graduate of system analysis and development, I am a software developer, Crafting beautiful user experiences with code. Working on the front-lines for digital transformation. Experienced in the latest techonologies like HTML, CSS, and JavaScript. Ready to help you bring your dream project to life! Below are some of the projects i have worked on.
                                <br />
                                <br />
                                As a web developer with more than 2 years of experience, I have honed my skills in various aspects of web development.
                                <br />
                                <br />
                                From front-end development to back-end programming, I have a comprehensive understanding of the technologies and tools required to build robust and user-friendly websites.
                                <br />
                                <br />
                                Here are some key areas in which I excel:
                                <br />
                                <br />
                            </p>
                        </SlideLeft>
                        <SlideLeft delay={0.24}>
                            <ul>
                                <li>
                                    Front-end building tools: Figma, Html, Css, JavaScript.
                                </li>
                                <br />
                                <li>
                                    Front-End libraries: React, Framer Motion, Bootstrap, Material Ui, to name a few
                                </li>
                                <br />
                                <li>
                                    BackEnd: NodeJs, MongoDb, JWT, Express, MySql, SQlite, among others.
                                </li>
                                <br />
                                <li>
                                    Other techonologies and languages: Python, tailwind, C#, etc.
                                </li>
                            </ul>
                        </SlideLeft>
                    </aside>

                    <aside className={styled.aside_logo}>
                        <SlideRight delay={0.26}>
                            <div className={styled.mg_bt}>
                                <h2>Some tecnologies I have used</h2>
                                <div className={styled.tech} >
                                    {
                                        techs.map(el =>
                                            <span className={styled.techTexts} key={el.id}>{el.text}</span>)
                                    }
                                </div>
                            </div>
                        </SlideRight>
                        <SlideRight delay={0.28}>
                            <div className={styled.mg_bt}>
                                <h2>Some courses I have taken</h2>
                                <div className={styled.tech} >
                                    {
                                        courses.map(el =>
                                            <span className={styled.techTexts} key={el.id}>{el.course}</span>)
                                    }
                                </div>
                            </div>
                        </SlideRight>
                        <SlideRight delay={0.3}>
                            <div className={styled.mg_bt}>
                                <h2>My Workflow</h2>
                                <div className={styled.tech} >
                                    {
                                        workflows.map(el =>
                                            <div className={styled.techTexts} key={el.id}>{el.course}</div>)
                                    }
                                </div>
                            </div>
                        </SlideRight>
                    </aside>
                </div>
            </div>
        </div>
    )
}