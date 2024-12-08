// MovieCard.jsx

import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import useCardVideo from '../hooks/useCardVideo';
import playIcon from "../assets/images/play.svg"

const MovieCard = ({ photoUrl, title, id,overview, release , average }) => {
  const [videoFetched, setVideoFetched] = useState(false);
  const [trailer, setTrailer] = useCardVideo(videoFetched ? id : null);

  const handleCardClick = () => {
    if (!videoFetched) {
      setVideoFetched(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoFetched) {
      setVideoFetched(false);
      setTrailer(null);
    }
  };

  return (
    <div>
      <div
        className='flex flex-col gap-2 w-48 flex-shrink-0 mb-2 cursor-pointer group'
        onClick ={handleCardClick}
        onMouseLeave={handleMouseLeave}
      >
        <div className='w-48 h-60 relative'>
          {
            !videoFetched ? (
              <>
                <img
                  src={IMG_CDN_URL + photoUrl}
                  className='w-48 h-60 rounded-lg'
                  alt={`${title} img`}
                  loading='lazy'
                />
                <img className='absolute top-2 left-2  w-8 h-8 z-10 '
                 src={playIcon} alt="playicon" />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-sm font-semibold">Click for more details</p>
              </div>
              
              </>
              
            ) : (
              trailer == null ? (
                <div className='w-96 h-72 bg-black rounded-lg border-2 shadow-lg border-red-700 -ml-16 z-50  relative flex flex-col gap-1 bg-opacity-95 '>
                  <img
                  src={IMG_CDN_URL + photoUrl}
                  className='w-96 h-48'
                  alt={`${title} img`}
                  loading='lazy'
                  />
                  <div className='font-bold text-base   flex gap-1 justify-between items-start '>
                    <div className='flex flex-col gap-1 w-64 pl-2'>
                      <p className='text-lg'>{title}</p>
                    </div>

                    <div className='flex text-xs w-20 flex-col gap-1'>
                      <p>{release}</p>
                      <p>{average} Avg</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Render the trailer video here
                <div className='w-96 h-72 bg-black rounded-lg border-2 shadow-lg border-red-700 -ml-16 z-50  absolute flex flex-col gap-1 bg-opacity-95'>
                  <iframe 
                    title={title}
                    className='aspect-video w-[23rem] object-cover'
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media" 
                  >
                  </iframe>
                  <div className='font-bold text-base pl-2  flex gap-1 justify-between items-start'>
                    <div className='flex flex-col gap-1 w-64'>
                      <p className='text-lg'>{title}</p>
                    </div>

                    <div className='flex text-xs w-20 flex-col gap-1'>
                      <p>{release}</p>
                      <p>{average} Avg</p>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
        <p className='font-bold'>
          {title.length > 35 ? title.slice(0, 35) + '...' : title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;