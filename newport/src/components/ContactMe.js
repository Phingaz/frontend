import styled from "./ContactMe.module.css"
import { FadeIn, Reveal, SlideLeft, SlideRight } from "./Reveal"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { useRef, useState } from "react";

export const ContactMe = () => {

  const input = useRef()

  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setError({})
    const formInput = { email: input.current.value }
    fetch(`https://centraldb.onrender.com/api/v1/email`, {
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(data => data.json())
      .then(res => {
        setError(res)
        input.current.value = ""
      })
      .catch(error => setError(error))
  }

  return (
    <div id="contact" className={styled.contact}>
      <div className={styled.container}>
        <FadeIn delay={0.2}>
          <h1>Contact Me<span>.</span> <hr /></h1>
        </FadeIn>

        <div className={styled.section}>
          <div className={styled.aside}>
            <Reveal delay={0.3}>
              <h2>
                Let's talk
                <ForumRoundedIcon
                  className={styled.icon_large}
                />
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <form onSubmit={handleSubmit}>
                <div className={styled.email}>
                  <input
                    ref={input}
                    type="email"
                    required
                  />
                  <label>Enter email address</label>
                </div>
                <button>Contact me Prosper</button>
              </form>
            </Reveal>
                {
                  error.message
                  &&
                  <p className={`${error.success ? styled.success : styled.error}`}>{error.message}</p>
                }
          </div>

          <div className={styled.footer} >
            <SlideLeft delay={0.5}>
              <div className={styled.card}>
                <a
                  href="https://bit.ly/3JJ6IXO" target="blank">
                  <AddLocationAltRoundedIcon />
                </a>
                <h4>Location</h4>
                <hr />
                <p>Sao Paulo, Brasil</p>
              </div>
            </SlideLeft>
            <Reveal delay={0.7}>
              <div className={styled.card}>
                <MarkEmailReadRoundedIcon />
                <h4>Email</h4>
                <hr />
                <a href="mailto:piinoya@gmail.com" target="blank">
                  <p>piinoya@gmail.com</p>
                </a>
              </div>
            </Reveal>
            <SlideRight delay={0.5}>
              <div className={styled.card}>
                <PhoneInTalkRoundedIcon />
                <h4>Phone</h4>
                <hr />
                <a href="tel:+5511951413228" target="blank">
                  <p>+55 (11) 95141 - 3228</p>
                </a>
              </div>
            </SlideRight>
          </div>
          <FadeIn delay={0.8}>
            <p className={styled.c}>
              Phingaz © 2023
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

