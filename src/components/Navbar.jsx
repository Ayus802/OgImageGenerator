import React from 'react'
import dead from '../assets/xyz.png'

function Navbar() {
  return (
    <div className='w-screen bg-blue-900 h-12 fixed shadow-md shadow-blue-500 flex justify-between items-center'>
        <div className='p-3 font-extrabold font-mono flex items-center'>
            <img src={dead} alt="" srcset="" className='h-10'/>
            OgImageGenerator
        </div>
        <div className='pr-3 font-extrabold font-mono'>
            DEVELOPER: Ayush Kumar Gupta
        </div>
    </div>
  )
}

export default Navbar