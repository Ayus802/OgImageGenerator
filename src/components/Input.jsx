import React from 'react'

function Input({label, onChange, placeholder, type}) {
  return (
    <div className='w-full mb-4'>
        <div>{label}</div>
        <input 
            type= {type}
            name={label} 
            onChange={onChange} 
            placeholder={placeholder}
            className='w-full rounded h-9 p-3 text-sm text-black'
        />
    </div>
  )
}

export default Input