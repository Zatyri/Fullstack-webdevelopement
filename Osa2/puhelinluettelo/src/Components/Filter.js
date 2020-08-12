import React from 'react'

const Filter = ({search, handleChange}) => {

    return (
        <>
          <div>filter shown with</div>  
          <input value={search} onChange={handleChange}/>
        </>
    )
}

export default Filter
