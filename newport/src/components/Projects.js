import styled from "./Projects.module.css"
import { FadeIn, Reveal } from "./Reveal"
import { project } from "./data"


export const Projects = () => {
  return (
    <div id="project" className={styled.projects}>
      <div className={styled.container}>
        <FadeIn duration={2} delay={0.2}>
          <h1>Projects<span>.</span> <hr /></h1>
        </FadeIn>

        <div className={styled.wrapper}>
          {project.map(el => {
            return (
              <Reveal key={el.id} delay={0.2}>
                <div className={styled.project}>
                  <a href={el.link} target="blank"> <img src={el.img} alt={el.alt} /></a>
                  <div>
                    <h4>{el.name}</h4>
                    <h6>{el.techStack}</h6>
                    <p>{el.about} <a target="blank" href={el.link}>
                        Learn more...
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}

        </div>
      </div>
    </div>
  )
}