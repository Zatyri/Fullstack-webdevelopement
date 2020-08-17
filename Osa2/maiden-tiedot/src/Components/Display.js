import React from 'react'
import DisplayLanguages from './DisplayLanguages'
import Country from './Country'

const Display = ({countries, filter}) => {
    
    const display = () => {
        if(countries.length > 1 && countries.length < 11){  
            const toDisplay = multipleResult()          
            return toDisplay                
        } else if(countries.length == 1 && !countries[0].name.includes('Too many')){           
            
            return <Country country={countries} />
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

    return (
        <>
            {display()}
        </>
    )
}

export default Display
