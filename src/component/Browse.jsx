import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import searchIcon from "../assets/images/search.svg"
import GptSearch from "./GptSearch.jsx";
import { toggleGptSearch } from '../utils/gptSlice.jsx';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const showGpt = useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOutClick= ()=>{
    signOut(auth).catch((error) => {
      navigate("/error")
    });
  }

  const handleSearchClick=()=>{
    dispatch(toggleGptSearch());
  }

  useNowPlayingMovies(); 
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='max-h-screen w-screen'>
      <div className='header'>
        <Header/>
        {showGpt && <GptSearch/>}
        <div className='flex gap-6  absolute z-40 right-12 top-6'>
            {user && user.photoURL && (
              <>
              <button onClick={()=>handleSearchClick()} className='cursor-pointer min-w-fit'><img src={searchIcon} alt="Search" /></button>
              <img src={user.photoURL} alt="User Avatar" className='w-10 h-10 rounded-md' />
              </>
            )}
            <button 
              className=' min-w-20 h-10 bg-[#f22626] rounded-lg text-white font-bold'
              onClick={()=>handleSignOutClick()}
            >Sign Out</button>
            
          </div>
      </div>
      
      {!showGpt &&
        <>
          <div className=''>
            <MainContainer/>
          </div>
          <div className='px-2 md:px-8 '>
            <SecondaryContainer/>
          </div>
        </>
      }
      

    </div>
  )
}

export default Browse