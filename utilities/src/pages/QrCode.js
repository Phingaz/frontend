import { useEffect, useRef, useState } from "react"
import Wrapper from "../components/Wrapper"
import styled from "./Qrcode.module.css"
import { saveAs } from 'file-saver'


export const QrCode = () => {
  const input = useRef()

  const [qrcode, setQrcode] = useState()

  const [message, setMessage] = useState({
    fetch: true,
    loading: true
  })

  useEffect(() => {
    setMessage({
      loading: true,
    })
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://localhost:3000/qrcode`)
      .then(res => res.blob())
      .then(blob => {
        const genImage = URL.createObjectURL(blob)
        setQrcode(genImage)
        setMessage({
          loading: false,
          message: ""
        })
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
        setMessage({
          loading: false,
          fetch: true,
          message: "QrCode Genetared Succesfully"
        })
      })
  }

  const downloadImg = () => {
    saveAs(qrcode, 'qrCode.jpg')
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

          {
            message.loading === false && message.fetch === true
            &&
            <p>{message.message}</p>
          }

        </form>
        <div className={styled.img}>
          {
            message.loading === true
              ?
              <p>loading...</p>
              :
              <img
                src={qrcode}
                alt="qrcode"
              />
          }
          <button onClick={downloadImg}>Download</button>
        </div>
      </div>
    </Wrapper>
  )
}
