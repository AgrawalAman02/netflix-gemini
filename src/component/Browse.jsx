import React from 'react'
import netflixIcon from "../assets/images/Netflix_Logo_PMS.png"
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOutClick= ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div>
      <div className='header'>
        <div className='absolute bg-gradient-to-b from-black px-[2rem] w-full h-24 z-30 flex items-center justify-between'>
          <img src={netflixIcon} alt="netfloxIcon"  className='w-[11.5rem] h-[5.5rem]'/>
          <div className='flex gap-2'>
            {user && user.photoURL && (
              <img src={user.photoURL} alt="User Avatar" className='w-10 h-10 border rounded-full' />
            )}
            <button 
              className='w-20 h-10 bg-[#f22626] rounded-lg text-white font-bold'
              onClick={()=>handleSignOutClick()}
            >Sign Out</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse