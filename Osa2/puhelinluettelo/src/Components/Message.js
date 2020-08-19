import React from 'react'

const Message = ({message, error}) => {
    const messageStyle = {
        color: 'green',
        background: 'lightgreen',        
        fontSize: 25
    }
    const messageErrorStyle = {
        color: 'red',
        background: 'yellow',        
        fontSize: 25
    }

    return (
        <>
            <p style={error ? messageErrorStyle:messageStyle}>{message}</p>
        </>
    )
}

export default Message
