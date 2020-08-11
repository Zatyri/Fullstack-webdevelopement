import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {  

    return (
        <>
            {props.course.map( course => {
                return(
                <div key={course.id}>
                    <Header headerText={course.name} />
                    <Content courses={course.parts} />
                    <Total parts={course.parts} />
                </div>
                )
            })}
        </>
    )
}

export default Course
