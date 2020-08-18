import React from 'react'

const NameList = ({persons, search, deletePerson}) => {
    const filteredPersons = persons.filter(person => {
        const name = person.name.toLowerCase()
        const nameToMatch = search.toLowerCase()        
        return name.includes(nameToMatch)
        
    })    
    
    return (
        <>
            {filteredPersons.map(person =>
                <p key={person.id}>{person.name}: {person.number} <button value={person.name} onClick={deletePerson}>delete</button></p>
            )}
        </>
    )
}

export default NameList
