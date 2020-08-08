import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <>
      
      <Part part = {parts[0].name} exercises={parts[0].exercises}/>
      <Part part = {parts[1].name} exercises={parts[1].exercises}/>  
      <Part part = {parts[2].name} exercises={parts[2].exercises}/>   
      
    </>
  )
}

const Total = (props) => {
  const exercises = props.parts
  
  return (
    <>
      <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course = {course} />
      <Content parts={course.parts} />      
      <Total parts={course.parts} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


