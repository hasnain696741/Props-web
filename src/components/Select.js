import React, { useRef, useState } from 'react';

const Select = ({setInp,option}) => {


  return (
    <div>
      <select onChange={(e) => setInp(e.target.value)}> 
       {option.map((x,i) => (
        <option key={i} value={x}>{x}</option>
       )) 

       }
      </select>
    </div>
  )
}

export default Select
