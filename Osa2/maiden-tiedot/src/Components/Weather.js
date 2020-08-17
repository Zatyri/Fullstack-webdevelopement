import React, {useState, useEffect} from 'react'
import axios from "axios"

const Weather = ({location}) => {

    const [weather, setWeather] = useState('')
    const [promise, setPromise] = useState(false)


    const weatherApiKey = process.env.REACT_APP_SECRET_KEY
    const weatherUrl = "http://api.weatherstack.com/current"
    const capital = location
    console.log(location);

    const getWeather = () => {
        const url = weatherUrl + "?access_key=" + weatherApiKey + "&query=" + capital
        axios
        .get(url)
        .then(response => {
            setWeather(response.data)
            console.log(response.data) 
            setPromise(true)        
        })
    }

    useEffect(getWeather, [])

    return (
        <>
            <h2>Weather in {location}</h2>
            <p>temperature: {promise ? weather.current.temperature:''} Celcius</p>
            <img alt="weather icon" src={promise ? weather.current.weather_icons[0]:''} size='50'/>
            <p>wind: {promise ? weather.current.wind_speed:''} mph direction {promise ? weather.current.wind_dir:''}</p>
        </>
    )
}

export default Weather
