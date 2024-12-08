import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addRecommendedTvShows } from '../utils/movieSlice';

const useRecommendedTvShows = () => {
    const dispatch = useDispatch();
    const recommendedTvShows = useSelector((store)=>store.movies.recommendedTvShows);


    const getRecommendedTvShows = async () =>{
        const response = await fetch('https://api.themoviedb.org/4/account/6752b9a23494cc9bfbc62610/tv/recommendations?page=1&language=en-IN', API_OPTIONS);
        const data = await response.json();
        console.log(data);
        dispatch(addRecommendedTvShows(data.results));
    };

    useEffect(()=>{
        !recommendedTvShows && getRecommendedTvShows();
    },[]);
}

export default useRecommendedTvShows