import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import HeaderContainer from './HeaderContainer.jsx';
import { useSelector } from 'react-redux';

const Browse = () => {
  
  const showGpt = useSelector((store)=>store.gpt.showGptSearch);


  useNowPlayingMovies(); 
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div className='max-h-screen w-screen relative'>

      <HeaderContainer/>

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