import React, { useState } from 'react'

const Search = ({filter}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
        filter(event.target.value)
    }

    return (
        <>
          <p>find counties</p>
          <input type='text' value={inputValue} onChange={handleChange}></input>
        </>
    )
}

export default Search
