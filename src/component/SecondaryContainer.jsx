import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store)=>store.movies.popularMovies);
    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

  return (
    <div className='flex flex-col gap-8 mt-48 md:-mt-40 z-20 relative'>
        <MovieList ListTitle={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MovieList ListTitle={"Popular"} movies={popularMovies} />
        <MovieList ListTitle={"Top Rated"} movies={topRatedMovies} />
        <MovieList ListTitle={"Upcoming"} movies={upcomingMovies} />
        <MovieList ListTitle={"Now Playing Movies"} movies={nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer