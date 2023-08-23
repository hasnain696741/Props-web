import React, {useState} from 'react'

const Input = ({show}) => {

  return (
    <div>
    <label>Username: </label> <input  type="text" value={show} />
    </div>
  )
}

export default Input
