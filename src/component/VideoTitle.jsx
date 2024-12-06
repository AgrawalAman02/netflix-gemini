import React from 'react'
import playBtn from "../assets/images/playBtn.png";
import infoBtn from '../assets/images/infoBtn.png'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='absolute mt-72 ps-3 w-[30rem] flex flex-col gap-6 z-20 mx-8 text-shadow'>
        <h1 className='font-bold text-4xl font-mono'>{title}</h1>
        <p className='text-sm'>{overview}</p>
        <div className='flex gap-2'>
            <button className='border w-fit h-fit px-8 py-2 rounded-md text-black bg-white font-semibold flex items-center gap-2 hover:bg-opacity-75'>
                <img src={playBtn} alt="playBtn" className='w-4 h-5' />
                Play
            </button>
            <button className='border w-fit h-fit px-8 py-2 rounded-md font-bold  opacity-90 flex items-center gap-2'>
                <img src={infoBtn} alt="infoBtn" className='w-6 h-6'/>
                More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle