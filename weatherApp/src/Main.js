import styled from "./Main.module.css"
export const Main = ({ data_info, fetchData, getGeo, input, handleInput, hours, error, day, times }) => {

    const { city, ab, full_description, degree, high, low, wind, rain, sunrise, sunset } = data_info

    const icons = full_description ? full_description[0].icon : []

    const iconLink = (icons) => {
        return (`https://openweathermap.org/img/wn/${icons}@2x.png`)
    }

    const celcius = (kelvin) => {
        const result = Math.floor((kelvin - 273.15))
        return result
    }

    const time = (epoch) => {
        const t = new Date(epoch * 1000).toLocaleTimeString()
        return t
    }

    const getHours = () => {
        for (let temp in hours) {
            return hours.time.map((el, i) => {
                return { time: el, temp: hours.temp[i] }
            })
        }
    }

    const five = () => {
        for (let keys in day[0]) {
            return day[0].intervals.map(el => {
                const d = new Date(el.startTime)
                const date = d.toLocaleDateString()
                const temp = el.values.temperature
                return { date, temp }
            })
        }
    }

    const date = new Date();
    const today = date.toDateString();
        
    const dateFunc = (n) => {
        const date = new Date(n);
        const today = date?.toDateString();
        return today
    }
    
    return (
        <main className={styled.main}>
            <div className={styled.hero_wrapper}>
                <div className={styled.hero}>
                    <h1>{city}, {ab}</h1>
                    <p>{today}</p>
                    <p>{times}</p>
                </div>
                <div className={styled.search}>
                    <input
                        name='input'
                        type='text'
                        onChange={handleInput()}
                        value={input}
                        placeholder='Search by city name'
                        autoFocus
                        autoComplete='off'
                    />
                    {!error.success
                        &&
                        <p className={`${error.message && styled.error}`}>{error.message}</p>}
                    <div className={styled.btns}>
                        <button onClick={fetchData()}>Search</button>
                        <button onClick={getGeo()}>Get my location</button>
                    </div>
                </div>
                <div className={styled.hero_aside}>
                    <div className={styled.highlight}>
                        <img className={styled.circle}
                            href="#"
                            src={icons ? iconLink(icons) : ""}
                            alt="weather_icon"
                        />
                        <h2>{celcius(degree) ? `${celcius(degree)}°c` : "Not available"}
                            <br />
                            {
                                error.success
                                &&
                                <p>{full_description[0].main}</p>
                            }
                        </h2>
                        
                    </div>
                    <div>
                        <div className={styled.info}>
                            <div>
                                <h6>{celcius(high)}°C</h6>
                                <h6>High</h6>
                            </div>
                            <div>
                                <h6>{celcius(low)}°C</h6>
                                <h6>Low</h6>
                            </div>
                            <div>
                                <h6>{rain}</h6>
                                <h6>Rain</h6>
                            </div>
                            <div>
                                <h6>{wind} m/s</h6>
                                <h6>Wind</h6>
                            </div>
                            <div>
                                <h6>{time(sunrise)}</h6>
                                <h6>Sunrise</h6>
                            </div>
                            <div>
                                <h6>{time(sunset)}</h6>
                                <h6>Sunset</h6>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className={styled.other}>
                <div className={styled.aside}>
                    <p>Today's Weather by location</p>
                    <div className={`${styled.card} ${styled.snaps_inline}`}>
                        {
                            getHours()?.map(el => {
                                return <div key={el.time.time} className={styled.card_info}>
                                    <h6>{el.temp}°C</h6>
                                    <h6>{el.time.time}</h6>
                                    <h6>{dateFunc(el.time.date)}</h6>
                                </div>
                            })}
                    </div>
                </div>

                <div className={styled.aside2}>
                    <p>Next 5 days by location</p>
                    <div className={styled.fcast}>
                        {
                            five()?.map(el => <div className={styled.fcast_info}
                                key={el.date}>
                                <h6>{dateFunc(el.date)}</h6>
                                <div className={styled}></div>
                                <h6>{el.temp}°C</h6>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </main>
    )
}
