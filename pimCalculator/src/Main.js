import { useState } from 'react'
import styled from "./Main.module.css"

export const Main = () => {
    const [inputs, setInput] = useState({
        np1: "",
        np2: "",
        pim: "",
        result: "",
        error: false,
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setSubmitted(false)
        setInput(p => ({
            ...inputs,
            error: false,
        }))
        const { name, value } = e.target
        setInput(p => ({
            ...inputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputs.np1.trim().length === 0 && inputs.np2.trim().length === 0 && inputs.pim.trim().length === 0) {
            const result = "All fields cannot be empty"
            setInput(p => ({
                ...inputs,
                result,
                error: true,
            }))
            setSubmitted(true)
        } else {
            const np1 = inputs.np1 * 4
            const np2 = inputs.np2 * 4
            const pim = inputs.pim * 2
            const result = (np1 + np2 + pim) / 10
            setInput(p => ({
                ...inputs,
                np1: "",
                np2: "",
                pim: "",
                result,
                error: false,
            }))
            setSubmitted(true)
        }
    }

    return (
        <form className={styled.main} onSubmit={handleSubmit}>
            <div className={styled.inputs}>
                <input
                    name="np1"
                    value={inputs.np1}
                    placeholder="Np1 score"
                    onChange={handleChange}
                    type='number'
                    autoComplete='off'
                />
                <input
                    name="np2"
                    value={inputs.np2}
                    placeholder="Np2 score"
                    onChange={handleChange}
                    type='number'
                    autoComplete='off'
                />
                <input
                    name="pim"
                    value={inputs.pim}
                    placeholder="Pim score"
                    onChange={handleChange}
                    type='number'
                    autoComplete='off'
                />
                {
                    submitted
                    &&
                    <label htmlFor='result' className={styled.result}>
                        Result:
                        <input
                        className={`${inputs.error && styled.error}`}
                            name="result"
                            value={inputs.result}
                            onChange={handleChange}
                        />
                    </label>

                }
                <button type='submit'>CALCULATE</button>
            </div>

        </form>
    )
}
