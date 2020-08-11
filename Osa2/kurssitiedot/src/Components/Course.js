import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {  
    
    
    return (
        <>
            <Header headerText={props.course.name} />
            <Content courses={props.course.parts} />
            <Total parts={props.course.parts} />
        </>
    )
}

export default Course
