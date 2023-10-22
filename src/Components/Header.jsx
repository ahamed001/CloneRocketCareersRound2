import React from 'react'
import {BsBellFill} from 'react-icons/bs'
import {BiSolidUser} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div></div>
        <div className='my-2 md:mx-16 sm:mx-12 mx-8 py-2 flex'>
            <BsBellFill className='text-gray-800 text-xl right-0 mx-2 hover:text-gray-400'/>
            <BiSolidUser className='text-gray-800 text-xl right-0 mx-2 hover:text-gray-400'/>
        </div>
    </div>
  )
}

export default Header