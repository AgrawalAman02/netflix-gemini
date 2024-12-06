import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovie } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch(); 

    const getUpcomingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcomingMovie(data.results));
    };

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies