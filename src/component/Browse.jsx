import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';

const Browse = () => {
  const navigate = useNavigate();

  const user = useSelector((store)=>store.user);
  const handleSignOutClick= ()=>{
    signOut(auth).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div>
      <div className='header'>
        <Header/>
        <div className='flex gap-4  absolute z-50 right-10 top-5'>
            {user && user.photoURL && (
              <img src={user.photoURL} alt="User Avatar" className='w-10 h-10' />
            )}
            <button 
              className=' w-20 h-10 bg-[#f22626] rounded-lg text-white font-bold'
              onClick={()=>handleSignOutClick()}
            >Sign Out</button>
            
          </div>
      </div>
    </div>
  )
}

export default Browse