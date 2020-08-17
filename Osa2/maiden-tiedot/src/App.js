import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])

  const getCountriesData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {      
        setCountries(response.data)
      })
  }
  useEffect(getCountriesData, [])

  return (
    <>
      <Countries countries={countries}/>
    </>
  )
}

export default App

