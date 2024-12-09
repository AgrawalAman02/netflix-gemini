import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ListTitle, movies}) => {
    // const {title,id,poster_path} = movies;
    if(!movies) return;
  return (
    <div className='flex flex-col py-1  md:px-4 md:py-4'>
        <h2 className='text-lg md:text-2xl px-2 pb-1 md:pb-2 font-semibold  w-fit border-l-4 pl-4 pt-2 border-t-2'>{ListTitle}</h2>
        <div className='flex flex-nowrap md:gap-3 border-b items-start  overflow-x-auto scrollbar-hide scroll-smooth  '>
            {   
                movies?.map((item)=>(
                    item.poster_path ? (
                    <MovieCard 
                        key={item.id} 
                        id={item.id} 
                        photoUrl={item.poster_path} 
                        title={item.title || item.name}
                        release = {item.release_date || item.first_air_date}
                        average = {item.vote_average}
                    /> )  : null    
                )  )
            }

        </div>

    </div>
  )
}

export default MovieList