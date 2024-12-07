import React from 'react'

const GptSearch = () => {
  return (
    <div>
      <div className='bg-red-700 w-[45rem] absolute right-1/4 top-6 z-30 p-1 h-11 rounded-2xl shadow-lg'>
        <input 
          type="text" 
          placeholder="Search..." 
          className='w-full  p-2 px-4 h-9 rounded-xl focus:outline-none text-stone-950'
        />
      </div>
    </div>
  )
}

export default GptSearch