import React from 'react'

function Input({placeholder}) {
  return (
    <div className='p-1 border border-black rounded-md'> <input type="text" placeholder={placeholder}/></div>
  )
}

export default Input