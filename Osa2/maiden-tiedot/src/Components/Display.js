import React from 'react'
import DisplayLanguages from './DisplayLanguages'

const Display = ({countries, filter}) => {
    
    const display = () => {
        if(countries.length > 1 && countries.length < 11){  
            const toDisplay = multipleResult()          
            return toDisplay                
        } else if(countries.length == 1 && !countries[0].name.includes('Too many')){           
            const toDisplay = oneResult()
            return toDisplay  
        } else {
            return countries.map(x => <p key={x.name}>{x.name}</p>)
        }
    }

    const handleCkick = (event) => {       
        
        filter(event.target.value)
    }

    const multipleResult = () => {
        const toReturn = countries.map(x => 
            <React.Fragment key={x.name}>
                <p>{x.name} <button value={x.name} onClick={handleCkick}>show</button></p> 
                
            </React.Fragment>
            )  
        return toReturn
    }

    const oneResult = () => {
        const country = countries.map(x => 
            <React.Fragment key={x.name}>
                <h1 >{x.name}</h1>
                <p>capital {x.capital}</p>
                <p>population {x.population}</p>
                <h1>languages</h1>
                <DisplayLanguages languages={x.languages} />
                <img alt='counry flag' src={x.flag} width='50'/>                    
            </React.Fragment>
    )
      return country
    }

    return (
        <>
            {display()}
        </>
    )
}

export default Display
