import React from 'react'
import netflixIcon from "../assets/images/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black px-[9.7rem] py-2 w-full h-20 z-30'>
        <img src={netflixIcon} alt="netfloxIcon"  className='w-[11.5rem] h-[4.8rem]'/>
    </div>
  )
}

export default Header