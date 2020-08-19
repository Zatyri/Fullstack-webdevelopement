import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import NameList from './Components/NameList'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm';
import phoneBookService from './services/phoneBook'
import Message from './Components/Message'

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
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

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
        setMessage(`${updatedData.name} was successfully added to the phonebook`)
        setTimeout(()=>{
          setMessage(null)}
          , 5000)
      })
      .catch(error => {
        setError(true)
        setMessage(`Failed to add name to the phonebook`)
        setTimeout(()=>{
          setMessage(null)
          setError(false)}
          , 5000)
      })
      
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
     nameExcists()
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

  const nameExcists = () =>{
    const modifyNumber = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
    if(!modifyNumber){
      return null
    }
    const index = persons.findIndex(person => person.name === newName)
    const idToUpdate = persons[index].id
    const personToUpdate = persons[index]
    const updatedPerson = {... personToUpdate, number: newNumber }

    phoneBookService
      .update(idToUpdate, updatedPerson)
      .then(returnedPerson => {       
        setPersons(persons.map(person => person.id !== idToUpdate ? person : returnedPerson))
        setMessage(`${newName} number was successfully updated to ${newNumber}`)
        setTimeout(()=>{
          setMessage(null)}
          , 5000)
      })
      .catch(error => {
        setError(true)
        setMessage(`Failed to update number`)
        setTimeout(()=>{
          setMessage(null)
          setError(false)}
          , 5000)
      })
        setNewName('')
        setNewNumber('')
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
const personName = persons[index].name

    phoneBookService
      .remove(idToDelete)
      .then(() => {
        getDataHook()
        setMessage(`${personName} was successfully deleted from the phonebook`)
        setTimeout(()=>{
          setMessage(null)}
          , 5000)
      })
      .catch(error => {
        setError(true)
        setMessage(`Failed to delete contact`)
        setTimeout(()=>{
          setMessage(null)
          setError(false)}
          , 5000)
      })
  }


  return (
    <div>
      <Header header='Phonebook' />
      <Message message={message} error={error}/>
      <Filter search={searchName} handleChange={handleFilterInput}/>
      <Header header='add a new'/>
      <PersonForm addName={addName} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <Header header='Numbers' />
      <NameList persons={persons} search={searchName} deletePerson={handleDeletePerson}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


