import React from 'react'
import DisplayLanguages from './DisplayLanguages'

import Weather from './Weather'

const Country = ({country}) => {
    
    return (
        <React.Fragment key={country.name}>
            <h1 >{country[0].name}</h1>
            <p>capital {country[0].capital}</p>
            <p>population {country[0].population}</p>
            <h1>languages</h1>
            <DisplayLanguages languages={country[0].languages} />
            <img alt={country[0].name + ' flag'}  src={country[0].flag} width='50'/> 
            <Weather location={country[0].capital} />             
        </React.Fragment>
    )
}

export default Country
