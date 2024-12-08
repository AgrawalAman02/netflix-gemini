import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovie } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch(); 
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getUpcomingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1&region=IN', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcomingMovie(data.results));
    };

    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies