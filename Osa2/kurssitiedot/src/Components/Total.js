import React from 'react'

const Total = ({parts}) => {
    const exercisesArray = parts.map(x => x.exercises)
    
    const reducer = (a, b) => a + b
    const sumOfexercises = () => exercisesArray.reduce(reducer)

    return (
        <>
            <h2>total of {sumOfexercises()} exercises</h2>
        </>
    )
}

export default Total
