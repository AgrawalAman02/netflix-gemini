import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);


    const getPopularMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1&region=IN', API_OPTIONS);
        const data = await response.json();
        dispatch(addPopularMovie(data.results));
    };

    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies