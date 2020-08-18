import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Header from './Components/Header'
import NameList from './Components/NameList'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm';
import phoneBookService from './services/phoneBook'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: '', 
      number: '',
      id: ''
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchName, setSearchName] = useState('')

  const getDataHook = () => {
    phoneBookService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }
  useEffect(getDataHook, [])

  const addData = (newPerson) => {
    phoneBookService
      .addNew(newPerson)
      .then(updatedData => {
        setPersons(persons.concat(updatedData)) 
      })
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return null
    }
    const nameToAdd = {
      name: newName,
      number: newNumber
    }
    setNewName('')
    setNewNumber('')
    addData(nameToAdd)
  }

  const handleAddName = (event) => setNewName(event.target.value) 
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleFilterInput = (event) => {
    setSearchName(event.target.value)    
  }
  const handleDeletePerson = (event) => {
    const confirm = window.confirm(`Delete ${event.target.value}?`)
    if(!confirm){
      return null
    }

const index = persons.findIndex(person => person.name === event.target.value)
const idToDelete = persons[index].id

    phoneBookService
      .remove(idToDelete)
      .then(() => getDataHook()
      )

  }


  return (
    <div>
      <Header header='Phonebook' />
      <Filter search={searchName} handleChange={handleFilterInput}/>
      <Header header='add a new'/>
      <PersonForm addName={addName} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <Header header='Numbers' />
      <NameList persons={persons} search={searchName} deletePerson={handleDeletePerson}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))


