import React from 'react'
import LoginBg from "../assets/images/LoginBg.jpg"
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearch = () => {

  const langValue = useSelector((store)=>store.appConfig.lang);

  return (
    <div>
      <img src={LoginBg} alt="LoginBg" className='absolute z-10 h-full w-full object-cover opacity-20' />
      <div className='bg-red-700 w-[45rem] absolute left-1/4 top-6 z-30 p-1 h-11 rounded-2xl shadow-lg '>
        <form action="submit" className='flex gap-2' onSubmit={(e)=>e.preventDefault()}>
          <input 
            type="text" 
            placeholder={lang[langValue].searchPlaceHolder} 
            className='w-full  p-2 px-4 h-9 rounded-xl focus:outline-none text-stone-950'
          />
         
        </form>
      </div>
    </div>
  )
}

export default GptSearch