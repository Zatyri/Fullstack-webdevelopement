import React from 'react'

const Total = ({parts}) => {
    const exercisesArray = parts.map(x => x.exercises)
    
    const reducer = (a, b) => a + b
    const sumOfexercises = () => exercisesArray.reduce(reducer)

    return (
        <>
            <p>total of {sumOfexercises()} exercises</p>
        </>
    )
}

export default Total
