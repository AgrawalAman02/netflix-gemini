import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addRecommendedMovie } from '../utils/movieSlice';

const useRecommendedMovies = () => {
    const dispatch = useDispatch();
    const recommendedMovies = useSelector((store)=>store.movies.recommendedMovies);


    const getRecommendedMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/4/account/6752b9a23494cc9bfbc62610/movie/recommendations?page=1&language=en-US', API_OPTIONS);
        const data = await response.json();
        dispatch(addRecommendedMovie(data.results));
    };

    useEffect(()=>{
        !recommendedMovies && getRecommendedMovies();
    },[]);
}

export default useRecommendedMovies