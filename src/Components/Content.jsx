import React from 'react'

const Content = () => {
  return (
    <div>
        <div className='px-12 py-5 font-bold text-4xl text-left'>
            Store
        </div>
        <div className='py-4'>
            <div className=' mx-12 my-5 sm:h-44 h-32 pt-20 px-8 sm:pt-32 rounded-lg font-semibold sm:text-2xl text-xl text-left text-white bg-gradient-to-r from-blue-500 to-blue-600'>
                Meal Plan
            </div>
            <div className=' mx-12 my-5 sm:h-44 h-32 pt-20 px-8 sm:pt-32 rounded-lg font-semibold sm:text-2xl text-xl text-left text-white bg-gradient-to-r from-pink-600 to-pink-700'>
                Training Plan
            </div>
            <div className=' mx-12 my-5 sm:h-44 h-32 pt-16 px-8 sm:pt-32 rounded-lg font-semibold sm:text-2xl text-xl text-left text-white bg-gradient-to-r from-blue-700 to-blue-800'>
                Supplement Routine
            </div>
            <div className=' mx-12 my-5 sm:h-44 h-32 pt-20 px-8 sm:pt-32 rounded-lg font-semibold sm:text-2xl text-xl text-left text-white bg-gradient-to-r from-slate-700 to-slate-800'>
                Track Progress
            </div>
            <div className=' mx-12 my-5 sm:h-44 h-32 pt-20 px-8 sm:pt-32 rounded-lg font-semibold sm:text-2xl text-xl text-left text-white bg-gradient-to-r from-green-600 to-green-700'>
                Recipe Builder
            </div>
        </div>
    </div>
  )
}

export default Content