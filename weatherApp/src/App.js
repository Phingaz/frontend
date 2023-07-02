import { useEffect, useState } from "react";
import { Main } from "./Main";

function App() {
  const api_key = "32ae9e5c55ffec11432a263a55b42506"
  const api_key2 = "hmmj4iD9KFSeRlD0ANEIqw5YBm2XjtoZ"

  const raw = {
    city: "Search or",
    ab: "Get location",
    full_description: [{ main: "Not found" }],
    degree: "Not found",
    high: "Not found",
    low: "Not found",
    wind: "Not found ",
    rain: "Not found",
    sunrise: "Not found",
    sunset: "Not found",
  }

  const getIp = () => {
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
      .then(data => data.json())
      .then(result => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${result.latitude}&lon=${result.longitude}&appid=${api_key}`)
          .then(data => data.json())
          .then(result => {
            seterror({ success: true, message: "" })
            setData(p => ({
              ...p,
              city: result.name,
              ab: result.sys.country,
              full_description: result.weather,
              degree: result.main.temp,
              high: result.main.temp_max,
              low: result.main.temp_min,
              wind: result.wind.speed,
              rain: result.main.min,
              sunrise: result.sys.sunrise,
              sunset: result.sys.sunset,
            }))
          })
      })
  }

  const bySearch = (input) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`)
      .then(data => data.json())
      .then(result => {
        if (!result.sys) {
          setData(raw)
          seterror({ success: false, message: "City not found" })
        }
        if (result.sys) {
          seterror({ success: true, message: "" })
          setData(p => ({
            ...p,
            city: result.name,
            ab: result.sys.country,
            full_description: result.weather,
            degree: result.main.temp,
            high: result.main.temp_max,
            low: result.main.temp_min,
            wind: result.wind.speed,
            rain: result.main.min,
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset,
          }))
        }
      })
      .catch(error => console.log(error))
  }

  const hourlyGeo = () => {
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
      .then(data => data.json())
      .then(result => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&hourly=temperature_2m`)
          .then(data => data.json())
          .then(result => {
            const array = result.hourly
            if (array.time.length > 10) {
              const time = array.time.slice(0, 24).map(el => {
                const time = new Date(el).toLocaleTimeString()
                const date = new Date(el).toLocaleDateString()
                return { time, date }
              })
              const temp = array.temperature_2m.slice(0, 24).map(el => {
                return (el)
              })
              setHour({ time, temp })
              seterror({ success: true, message: "" })
            }
          })
      })
  }

  const daily = () => {
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
      .then(data => data.json())
      .then(result => {
        fetch(`https://api.tomorrow.io/v4/timelines?location=${result.latitude},${result.longitude}&fields=temperature&timesteps=1d&units=metric&apikey=${api_key2}`)
          .then(data => data.json())
          .then(result => {
            if (result.data === undefined) return
            setDay(result.data.timelines)
            seterror({ success: true, message: "" })
          })
      })
  }

  const [input, setinput] = useState("")

  const [data, setData] = useState({
    full_description: [{}]
  })

  const [hour, setHour] = useState([])

  const [day, setDay] = useState([])

  const [times, seTimes] = useState()

  const [error, seterror] = useState({
    success: false,
    message: ""
  })

  const getTime = () => {
    const date = new Date()
    const time = date.toLocaleTimeString()
    seTimes(time)
  }

  const handleFetch = () => {
    bySearch(input)
    hourlyGeo()
    setinput("")
    daily()
  }

  const getLocation = () => {
    getIp()
    hourlyGeo()
    daily()
  }

  useEffect(() => {
    getIp()
    hourlyGeo()
    daily()
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [])

  const handleInput = (e) => {
    seterror({ success: false, message: "" })
    const { value } = e.target
    setinput(value)
  }

  return (
    <div className="App">
      <Main
        data_info={data}
        getGeo={() => getLocation}
        fetchData={() => handleFetch}
        input={input}
        handleInput={() => handleInput}
        hours={hour}
        error={error}
        day={day}
        times={times}
      />
    </div>
  );
}

export default App;