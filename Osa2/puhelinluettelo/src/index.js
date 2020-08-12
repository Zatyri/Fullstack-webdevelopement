import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import NameList from './Components/NameList'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      number: '0401234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    persons.filter((person) => {
      if(person.name === newName){
        alert(`${newName} is already added to phonebook`)
      } else {
        const nameToAdd = {
          name: newName,
          number: newNumber
      }
      setPersons(persons.concat(nameToAdd))
      setNewName('')
      setNewNumber('')
    }
    return null
    })   
  }

  const handleAddName = (event) => setNewName(event.target.value) 
  const handleAddNumber = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <Header header='Phonebook' />
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAddName}/>          
        </div>
        <div>
          number: <input value={newNumber} onChange={handleAddNumber}/>          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header header='Numbers' />
      <NameList persons={persons} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))


