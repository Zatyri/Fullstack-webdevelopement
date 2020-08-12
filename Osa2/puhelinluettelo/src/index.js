import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import NameList from './Components/NameList'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm';

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      number: '0401234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchName, setSearchName] = useState('')

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
  const handleFilterInput = (event) => {
    setSearchName(event.target.value)    
  }

  return (
    <div>
      <Header header='Phonebook' />
      <Filter search={searchName} handleChange={handleFilterInput}/>
      <Header header='add a new'/>
      <PersonForm addName={addName} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <Header header='Numbers' />
      <NameList persons={persons} search={searchName}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))


