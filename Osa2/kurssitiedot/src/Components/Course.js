import React from 'react'
import Header from './Header'

const Course = (props) => {  
    console.log(props.course.name)  
    return (
        <>
            <Header headerText={props.course.name} />
            
        </>
    )
}

export default Course
