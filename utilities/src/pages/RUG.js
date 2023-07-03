import styled from "./RUG.module.css"
import Wrapper from "../components/Wrapper"
import { useState } from "react"

export const RUG = () => {

    const url = `https://randomuser.me/api/`

    const [data, setData] = useState([])

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result.results))
    }

    const handleClick = () => {
        fetchData()
    }

    return (
        <Wrapper>
            <div className={styled.rug}>
                <button onClick={handleClick}>Generate New User</button>

                {
                    data.map(el => {
                        const dofb = new Date(data[0].dob.date).toDateString()
                        return (
                            <main key={el.cell}>
                                <div className={styled.about}>
                                    <img src={el.picture.large} alt="profile_picture" />
                                    <div className={styled.name}>
                                        <span className={styled.info}>
                                            <h3>
                                                {el.name.first}
                                            </h3>
                                        </span>
                                        <span className={styled.info}>
                                            <h3>
                                                {el.name.last}
                                            </h3>
                                        </span>
                                    </div>
                                    <div className={styled.age}>

                                        <p>Birth date: <span className={styled.info}>
                                            {dofb}
                                        </span>
                                        </p>
                                        <div className={styled.name}>
                                            <p>Age: <span className={styled.info}>
                                                {el.dob.age}
                                            </span>
                                            </p>
                                            <p>Gender: <span className={styled.info}>
                                                {el.gender}
                                            </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styled.fone}>
                                        <p>Cell: <span className={styled.info}>
                                            {el.phone}
                                        </span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styled.login}>
                                    <div className={styled.email}>
                                        <p>Email: <span className={styled.info}>
                                            {el.email}
                                        </span>
                                        </p>
                                        <p>Username: <span className={styled.info}>
                                            {el.login.username}
                                        </span>
                                        </p>
                                        <p>Password: <span className={styled.info}>
                                            {el.login.password}
                                        </span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styled.address}>
                                    <p>Street: <span className={styled.info}>
                                        {el.location.street.number}
                                    </span>, <span className={styled.info}>
                                            {el.location.street.name}
                                        </span>
                                    </p>
                                    <div className={styled.state}>
                                        <p>City: <span className={styled.info}>
                                            {el.location.city}
                                        </span>
                                        </p>
                                        <p>State:  <span className={styled.info}>
                                            {el.location.state}
                                        </span>
                                        </p>
                                    </div>
                                    <div className={styled.zip}>
                                        <p>Country:  <span className={styled.info}>
                                            {el.location.country}
                                        </span>
                                        </p>
                                        <p>Postcode: <span className={styled.info}>
                                            {el.location.postcode}
                                        </span>
                                        </p>
                                    </div>
                                </div>

                            </main>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
