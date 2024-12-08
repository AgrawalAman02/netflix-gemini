import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const AI_Suggestion = () => {
    const {movieNames , movieList } = useSelector((store)=>store.gpt);
    if(!movieNames) return null;
  return  (
    <div className=' p-4 flex flex-col gap-8  z-30'>
        {
            movieNames.map((item,index)=>{
                return (
                    <MovieList key={`${item}-${index}`} ListTitle={movieNames[index]} movies={movieList[index]?.results} />
                )
            })
        }
    </div>
  )
}

export default AI_Suggestion