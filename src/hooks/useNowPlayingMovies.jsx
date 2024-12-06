import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovie } from '../utils/movieSlice';

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch(); 

    const getNowPlayingMovies = async () =>{
        // console.log(API_OPTIONS);
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await response.json();
        // console.log(data);    
        dispatch(addNowPlayingMovie(data.results));
    };

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;