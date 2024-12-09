import React from 'react'
import playBtn from "../assets/images/playBtn.png";
import infoBtn from '../assets/images/infoBtn.png'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='absolute mt-32 ps-1 mx-4 gap-2 w-[14rem] md:mt-72 md:ps-3 md:w-[30rem] flex flex-col md:gap-6 z-20 md:mx-8 text-shadow'>
        <h1 className='text-2xl font-medium  md:font-bold md:text-4xl font-mono'>{title}</h1>
        <p className='text-xs md:text-sm font-thin md:font-normal'>{overview}</p>
        <div className='flex gap-2'>
            <button className='border w-fit h-fit px-2 md:px-8 py-1 md:py-2 rounded-md text-black bg-white font-semibold flex items-center gap-1 md:gap-2 hover:bg-opacity-75'>
                <img src={playBtn} alt="playBtn" className='w-3 h-4  md:w-4 md:h-5' />
                Play
            </button>
            <button className='border w-fit h-fit px-2 md:px-8 py-1 md:py-2 rounded-md font-semibold md:font-bold  opacity-90 flex items-center gap-1 md:gap-2'>
                <img src={infoBtn} alt="infoBtn" className='w-4 h-4 md:w-6 md:h-6'/>
                More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle