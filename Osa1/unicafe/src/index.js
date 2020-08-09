import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({text,stats, end}) => <div>{text} {stats} {end}</div>


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const clickedGood = () => {
    increaseAll()
    countSum(1) 
    increaseGood()
  }
  
  const clickedNeutral = () => {
    increaseAll()    
    increaseNeutral()
  }
  const clickedBad = () => {
    increaseAll()
    countSum(-1)    
    increaseBad()
  }
  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)
  const increaseAll = () => setAll(all + 1)
  const countSum = (x) => setSum(sum + x)
  const countAverage = () => {
    if(all !== 0){      
      setAverage(sum/(all))
    }
  }
  const countPositive = () => {
    if(all !== 0){ 
      setPositive(good/all)
    }
  }

  useEffect(()=>{
    countAverage()
    countPositive()
  })

  

  return (
    <>
      <Header text='Give feedback'/>

      <Button text='good' handleClick={clickedGood}/> 
      <Button text='neutral' handleClick={clickedNeutral}/>      
      <Button text='bad' handleClick={clickedBad}/>      
      
      <Header text='Statistics'/>

      <Statistics text='good:' stats={good}/>
      <Statistics text='neutral:' stats={neutral}/>
      <Statistics text='bad:' stats={bad}/>
      <Statistics text='all:' stats={all} />
      <Statistics text='average:' stats={average} /> 
      <Statistics text='positive:' stats={positive} end='%'/>

    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

