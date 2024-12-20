import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovie } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);

    const getTopRatedMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1&region=IN', API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRatedMovie(data.results));
    };

    useEffect(()=>{
        !topRatedMovies && getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies