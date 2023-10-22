import React from 'react'
import {HiHome, HiMiniShoppingBag} from 'react-icons/hi2'
import {BsBarChartFill} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'

const Footer = () => {
  return (
    <div>
        <div className='my-2 sm:mx-6 mx-3 py-2 flex justify-around items-center'>
            <HiHome className='text-gray-400 text-2xl right-0 mx-2 hover:text-gray-800 cursor-pointer'/>
            <BsBarChartFill className='text-gray-400 text-2xl right-0 mx-2 hover:text-gray-800 cursor-pointer'/>
            <p className=' bg-sky-500 hover:bg-sky-700 rounded-full text-3xl w-[50px] text-white font-semibold p-2 cursor-pointer'>S</p>
            <HiMiniShoppingBag className='text-gray-400 text-2xl right-0 mx-2 hover:text-gray-800 cursor-pointer'/>
            <FiMenu className='text-gray-400 text-2xl right-0 mx-2 hover:text-gray-800 cursor-pointer'/>

        </div>
    </div>
  )
}

export default Footer