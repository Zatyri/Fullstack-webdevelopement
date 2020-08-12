import React from 'react'

const NameList = ({persons, search}) => {
    const filteredPersons = persons.filter(person => {
        const name = person.name.toLowerCase()
        const nameToMatch = search.toLowerCase()        
        return name.includes(nameToMatch)
        
    })    
    
    return (
        <>
            {filteredPersons.map(person =>
                <p key={person.name}>{person.name}: {person.number}</p>
            )}
        </>
    )
}

export default NameList
