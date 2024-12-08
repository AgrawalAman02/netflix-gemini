import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({photoUrl,title}) => {
  
  return (

    <div>
        <div className='flex flex-col gap-2 w-48 flex-shrink-0'>
            <div>
                <img 
                src={IMG_CDN_URL + photoUrl} className='w-48 h-60' alt={title+" img"} loading='lazy'/>
            </div>
            {title}
        </div>
    </div>
  )
}

export default MovieCard