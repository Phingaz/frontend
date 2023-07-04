import styled from "./ContactMe.module.css"
import { Reveal } from "./Reveal"


export const ContactMe = () => {
  return (
    <div id="contact" className={styled.contact}>
      <div className={styled.container}>
        <Reveal delay={0.2}>
          <h1>ContactMe<span>.</span> <hr /></h1>
        </Reveal>
      </div>
    </div>
  )
}

