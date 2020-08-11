import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {  
    
    return (
        <>
            <Header headerText={props.course.name} />
            <Content courses={props.course.parts} />
        </>
    )
}

export default Course
