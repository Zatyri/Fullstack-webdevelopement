import React from 'react'

const DisplayLanguages = ({languages}) => {    

    return (
        <ul>
            {languages.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
    )
}

export default DisplayLanguages
