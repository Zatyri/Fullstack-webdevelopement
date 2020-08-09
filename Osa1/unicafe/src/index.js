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

const Statistics = ({good,neutral,bad,all,average,positive}) => {
  if(all !== 0){
  return (
    <table>
      <tbody>    
        <StatisticsLine text='good:' stats={good}/>
        <StatisticsLine text='neutral:' stats={neutral}/>
        <StatisticsLine text='bad:' stats={bad}/>
        <StatisticsLine text='all:' stats={all} />
        <StatisticsLine text='average:' stats={average} /> 
        <StatisticsLine text='positive:' stats={positive} end='%'/>
      </tbody>
    </table>
  )
  } else {
    return <div>No feedback given</div>
  }
}

const StatisticsLine = ({text,stats, end}) => {
return(
  <tr>
    <td>{text}</td> 
    <td>{stats} {end}</td>
  </tr>
)
}

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
      setPositive((good/all)*100)
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

      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />



    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

