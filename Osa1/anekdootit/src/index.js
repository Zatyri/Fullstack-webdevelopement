import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const DisplayAnecdote = ({anecdote}) => {
  return (
  <p>{anecdote}</p>
  )
}

const DisplayVotes = ({votes}) => {
  return (
  <p>has {votes} votes</p>
  )
}




const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const random = () => {
    let randomNum = Math.random() * (5 - 0)
    return Math.round(randomNum)
  }

  const nextAnecdote = ()  => {    
    setSelected(random)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
  }

  return (
    <>   
      <DisplayAnecdote anecdote={props.anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />

      <Button text='vote' handleClick={vote}/>
      <Button text='next anecdote' handleClick={nextAnecdote}/>
      
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)