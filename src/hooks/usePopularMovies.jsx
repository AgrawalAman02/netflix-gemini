import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch(); 

    const getPopularMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addPopularMovie(data.results));
    };

    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies