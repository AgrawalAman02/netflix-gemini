import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOutClick= ()=>{
    signOut(auth).catch((error) => {
      navigate("/error")
    });
  }

  useNowPlayingMovies(); 

  return (
    <div className='max-h-screen w-screen'>
      <div className='header'>
        <Header/>
        <div className='flex gap-4  absolute z-40 right-12 top-5'>
            {user && user.photoURL && (
              <img src={user.photoURL} alt="User Avatar" className='w-10 h-10' />
            )}
            <button 
              className=' w-20 h-10 bg-[#f22626] rounded-lg text-white font-bold'
              onClick={()=>handleSignOutClick()}
            >Sign Out</button>
            
          </div>
      </div>
      
      <div className=''>
        <MainContainer/>
      </div>
      <div className='px-8 mt-2'>
        <SecondaryContainer/>
      </div>
      

    </div>
  )
}

export default Browse