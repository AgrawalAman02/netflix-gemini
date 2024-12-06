import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovie } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch(); 

    const getTopRatedMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRatedMovie(data.results));
    };

    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies