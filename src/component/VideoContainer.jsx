import React from 'react'
import useVideoContainer from '../hooks/useVideoContainer';
import { useSelector } from 'react-redux';

const VideoContainer = ({movieId}) => {
    const trailer = useSelector((store)=>store.movies.trailerVideo)

    useVideoContainer(movieId);

  return (
    <div className='h-96 md:h-screen w-screen '>
        <iframe 
        className='w-screen h-screen aspect-video'
        src={"https://www.youtube.com/embed/" +trailer?.key  + '?autoplay=1&mute=1'}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >
        </iframe>
    </div>
  )
}

export default VideoContainer