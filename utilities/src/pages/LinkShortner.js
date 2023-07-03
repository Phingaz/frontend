import { useRef, useState } from 'react'
import Wrapper from '../components/Wrapper'
import styled from "./LinkShortner.module.css"
import copy from 'copy-to-clipboard'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

export const LinkShortner = () => {

  const [links, setLinks] = useState([

  ])

  const [error, setError] = useState({
    state: Boolean,
    success: Boolean,
    message: ""
  })

  const input = useRef()

  const handleChange = (e) => {
    setError({
      state: false,
      success: false,
      message: ""
    })
  }

  const handleCopy = (data) => {
    copy(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formInput = input.current.value
    fetch(`https://api.shrtco.de/v2/shorten?url=${formInput}`)
      .then(res => res.json())
      .then(result => {
        if (result.ok === false) {
          setError({
            state: false,
            success: true,
            message: "This is not a valid url"
          })
          return
        }

        setError({
          state: true,
          success: true,
          message: "Link shortened succesfully"
        })
        setLinks(p => {
          return [...p, result.result]
        })
        input.current.value = ""
      })
  }

  return (
    <Wrapper>
      <div className={styled.linkShortner}>
        <h2>Link Shortner</h2>
        <form className={styled.wrapper} onSubmit={handleSubmit}>
          <div className={styled.container}>
            <input
              name="input"
              autoComplete="off"
              type="text"
              onChange={handleChange}
              ref={input}
              required
            />
            <label htmlFor="input">
              Enter url to shorten the link
            </label>
          </div>
          <button>Shorten link</button>
          {error.success && <p className={error.state ? styled.success : styled.error}>{error.message}</p>}
        </form>

        <div className={styled.result}>
          {links.map(el => {
            return (
              <div key={el.code} className={styled.links}>
                <div className={styled.link_items}>
                  <p>Original Link: {el.original_link}</p>
                  <i onClick={() => handleCopy(el.original_link)}><ContentCopyRoundedIcon /></i>
                </div>
                <div className={styled.link_items}>
                  <p>Short Link 1: {el.short_link}</p>
                  <i onClick={() => handleCopy(el.short_link)}><ContentCopyRoundedIcon /></i>
                </div>
                <div className={styled.link_items}>
                  <p> Short Link 2: {el.short_link3}</p>
                  <i onClick={() => handleCopy(el.short_link3)}><ContentCopyRoundedIcon /></i>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}