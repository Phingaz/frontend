import { useRef, useState } from "react"
import Wrapper from "../components/Wrapper"
import styled from "./Qrcode.module.css"

export const QrCode = () => {
  const input = useRef()

  const [qrcode, setQrcode] = useState()

  fetch(()=> {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://localhost:3000/qrcode`)
      .then(res => res.blob())
      .then(blob => {
        const genImage = URL.createObjectURL(blob)
        setQrcode(genImage)
      })
  }, [])


  const handleSubmit = (e) => {
    const formInput = input.current.value
    e.preventDefault()
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${formInput}`)
      .then(res => res.blob())
      .then(blob => {
        const genImage = URL.createObjectURL(blob)
        setQrcode(genImage)
      })
  }

  return (
    <Wrapper>
      <div className={styled.qrcode} >
        <form className={styled.wrapper} onSubmit={handleSubmit}>
          <div className={styled.container}>
            <input
              name="input"
              autoComplete="off"
              type="text"
              ref={input}
              required
            />
            <label htmlFor="input">
              Enter text to generate qrcode
            </label>
          </div>
          <button>Generate QrCode</button>
        </form>
          <img 
            src={qrcode}
            alt="qrcode"
          />
      </div>
    </Wrapper>
  )
}
