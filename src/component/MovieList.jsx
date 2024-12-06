import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ListTitle, movies}) => {
    // const {title,id,poster_path} = movies;
    if(!movies) return;
  return (
    <div className='flex flex-col px-1 py-1  md:px-4 md:py-4'>
        <h2 className='text-2xl font-semibold  w-fit border-l-4 pl-4 pt-2 border-t-2'>{ListTitle}</h2>
        <div className='flex flex-nowrap gap-3 border-b items-start  overflow-x-auto scrollbar-hide scroll-smooth  '>
            {
                movies?.map((item)=>(
                    <MovieCard key={item.id} photoUrl={item.poster_path} title={item.title} />      
                ))
            }

        </div>

    </div>
  )
}

export default MovieList