import React, { useState, useEffect } from 'react'
import moment from 'moment'



const iconMapping = {
  'clear sky': ['http://openweathermap.org/img/wn/01d@2x.png', 'http://openweathermap.org/img/wn/01n@2x.png'],
  'few clouds': ['http://openweathermap.org/img/wn/02d@2x.png', 'http://openweathermap.org/img/wn/02n@2x.png'],
  'scattered clouds': ['http://openweathermap.org/img/wn/03d@2x.png', 'http://openweathermap.org/img/wn/03n@2x.png'],
  'broken clouds': ['http://openweathermap.org/img/wn/04d@2x.png', 'http://openweathermap.org/img/wn/04n@2x.png'],
  'overcast clouds': ['http://openweathermap.org/img/wn/04d@2x.png', 'http://openweathermap.org/img/wn/04n@2x.png'],
  'light intensity drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'heavy intensity drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'light intensity drizzle rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'drizzle rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'heavy intensity drizzle rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'shower rain and drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'heavy shower rain and drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'shower drizzle': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'light intensity shower rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'shower rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'heavy intensity shower rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'ragged shower rain': ['http://openweathermap.org/img/wn/09d@2x.png', 'http://openweathermap.org/img/wn/09n@2x.png'],
  'light rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'moderate rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'heavy intensity rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'very heavy rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'extreme rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'rain': ['http://openweathermap.org/img/wn/10d@2x.png', 'http://openweathermap.org/img/wn/10n@2x.png'],
  'thunderstorm with light rain': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm with rain': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm with heavy rain': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'light thunderstorm': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'heavy thunderstorm': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'ragged thunderstorm': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm with light drizzle': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm with drizzle': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'thunderstorm with heavy drizzle': ['http://openweathermap.org/img/wn/11d@2x.png', 'http://openweathermap.org/img/wn/11n@2x.png'],
  'freezing rain': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'light snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'heavy snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'sleet': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'light shower sleet': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'shower sleet': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'light rain and snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'rain and snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'light shower snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'shower snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'heavy shower snow': ['http://openweathermap.org/img/wn/13d@2x.png', 'http://openweathermap.org/img/wn/13n@2x.png'],
  'mist': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'smoke': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'haze': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'sand/dust whirls': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'fog': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'sand': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'dust': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'volcanic ash': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'squalls': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png'],
  'tornado': ['http://openweathermap.org/img/wn/50d@2x.png', 'http://openweathermap.org/img/wn/50n@2x.png']
}


const App = () => {
  const [weatherInfo, updateWeatherInfo] = useState({})

  const latLong = [51.564937, -0.007365]


  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLong[0]}&lon=${latLong[1]}&exclude=minutely,alerts&units=metric&appid=73250291b5074399963b723e7870fafa`)
      .then(resp => resp.json())
      .then((data) => {
        updateWeatherInfo(data)
      })
  }, [])


  return <>
    <header></header>
    <main>
      <SearchInput />
      <CurrentDay weatherInfo={weatherInfo} />
      <FutureDays weatherInfo={weatherInfo} />
    </main>
    <footer></footer>
  </>

}



const SearchInput = () => {
  const [input, changeInput] = useState('...')


  function checkEnter(event) {
    const key = event.keyCode
    if (key === 13) {
      console.log('You pressed Enter')
      changeInput(event.target.value)

      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${input}&key=52535ae64e3048c58091a5065a58f57e`)
        .then((resp) => resp.json())
        .then((data) => {
          updateLocationInfo(data)
          console.log(locationInfo)
        })
    }
  }

  console.log(input)

  const [locationInfo, updateLocationInfo] = useState([])

  const [coordinates, updateCoordinates] = useState([])


  if (locationInfo.results === undefined || locationInfo.results[0] === undefined || locationInfo.results[0].geometry === undefined) {
    return <>
    <section className="search">
      <input onKeyDown={event => checkEnter(event)}></input>
    </section>
  </>
  
  } else {
    updateCoordinates([locationInfo.results[0].geometry.lat, locationInfo.results[0].geometry.lng])
    console.log(coordinates)
  }

  return <>
    <section className="search">
      <input onKeyDown={event => checkEnter(event)}></input>
    </section>
  </>
}














const CurrentDay = (props) => {

  let src = ''

  if (props.weatherInfo.current === undefined) {
    return <></>
  } else {

    if (props.weatherInfo.current.dt > props.weatherInfo.current.sunset) {
      src = iconMapping[props.weatherInfo.current.weather[0].description][1]
    } else {
      src = iconMapping[props.weatherInfo.current.weather[0].description][0]
    }

    return <>
      <section className="section-1">
        <h2>{moment.unix(props.weatherInfo.current.dt).format('h:mm a')}</h2>
        <h3>{moment.unix(props.weatherInfo.current.dt).format('Do MMMM YYYY')}</h3>
      </section>

      <section className="section-2">
        <article>
          <h2>{props.weatherInfo.timezone}</h2>
          <p>{props.weatherInfo.current.weather[0].description}</p>
        </article>
        <img src={src}></img>
      </section>

      <section className="section-3">
        <h2>{Math.round(props.weatherInfo.current.temp * 10) / 10}°C</h2>
        <article>
          <p>Feels Like: {Math.round(props.weatherInfo.current.feels_like * 10) / 10}°C</p>
          <p>Wind Speed: {Math.round(props.weatherInfo.current.wind_speed * 22.3694) / 10} mph</p>
          <p>Humidity: {props.weatherInfo.current.humidity}%</p>
        </article>
      </section>

      <section className="section-4">
        <div>
          <p>Sunrise:</p>
          <p>{moment.unix(props.weatherInfo.current.sunrise).format('h:mm a')}</p>
        </div>
        <div>
          <p>Sunset:</p>
          <p>{moment.unix(props.weatherInfo.current.sunset).format('h:mm a')}</p>
        </div>
      </section>
    </>
  }
}


const FutureDays = (props) => {
  if (props.weatherInfo.daily === undefined) {
    return <></>
  } else {

    return <>
      {props.weatherInfo.daily.map((day, index) => {
        return <section className="futureDays" key={index} id={index}>
          <h3>{moment.unix(day.dt).format('Do MMM')}</h3>
          <img src={iconMapping[day.weather[0].description][0]}></img>
          <section>
            <p>{Math.round(day.temp.min * 10) / 10}°C - {Math.round(day.temp.max * 10) / 10}°C</p>
            <p>{moment.unix(day.sunrise).format('h:mm a')} - {moment.unix(day.sunset).format('h:mm a')}</p>
          </section>
        </section>
      })
      }
    </>
  }
}


export default App
