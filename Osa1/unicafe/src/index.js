import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const Stats = ({text,stats}) => <div>{text} {stats}</div>


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <>
      <Header text='Give feedback'/>

      <Button text='good' handleClick={increaseGood}/> 
      <Button text='neutral' handleClick={increaseNeutral}/>      
      <Button text='bad' handleClick={increaseBad}/>      
      
      <Header text='Statistics'/>

      <Stats text='good:' stats={good}/>
      <Stats text='netural:' stats={neutral}/>
      <Stats text='bad:' stats={bad}/>

    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))


