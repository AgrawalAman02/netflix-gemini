import React from 'react'
import useVideoContainer from '../hooks/useVideoContainer';
import { useSelector } from 'react-redux';

const VideoContainer = ({movieId}) => {
    const trailer = useSelector((store)=>store.movies.trailerVideo)

    useVideoContainer(movieId);
    // Handle cases where trailer is not available
    if (!trailer) {
      return (
        <div className="h-96 md:h-screen w-screen flex items-center justify-center bg-black text-white">
          <p>No trailer available for this movie.</p>
        </div>
      );
    }
  

  return (
    <div className='h-96 md:h-screen w-screen '>
        <iframe 
        className='w-screen h-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&playlist=${trailer?.key}&playsinline=1`}
        allow="autoplay; encrypted-media" 
        referrerPolicy="strict-origin-when-cross-origin" >
        </iframe>
    </div>
  )
}

export default VideoContainer