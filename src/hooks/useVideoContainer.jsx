import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


const useVideoContainer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieVIdeos= async ()=>{

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const data = await response.json();
        
        const filteredData = data.results.filter((element)=>element.type==="Trailer");
        const trailerVdo = filteredData.length ? filteredData[0] : data.results[0];
        dispatch(addTrailerVideo(trailerVdo));

    }

    useEffect(()=>{
        getMovieVIdeos();
    },[])
}

export default useVideoContainer;