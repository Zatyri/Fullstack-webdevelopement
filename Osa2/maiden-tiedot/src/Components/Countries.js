import React, { useState} from 'react'
import Search from './Search'
import Display from './Display'

const Countries = ({countries}) => {
    const [country, setCountry] = useState([{
        name: 'Too many matches, specify another filter'
    }])
    
    const filterCountries = (keyWord) => {
        const filteredCountries = countries.filter(country => {
            const countyName = country.name.toLowerCase()
            const nameToSearch = keyWord.toLowerCase()
            return countyName.includes(nameToSearch)
        });     
        
        if(filteredCountries.length > 10 || filteredCountries.length === 0){
            setCountry([{name:'Too many matches, specify another filter'}])
        } else {
            setCountry(filteredCountries)
        } 
    }

    return (
        <>
            <Search filter={filterCountries}/>
            <Display countries={country} filter={filterCountries} />
        </>
    )
}

export default Countries
