import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCardVideo} from "../utils/movieSlice";


const useCardVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      if (!movieId) {
        dispatch(addCardVideo(null));
        return;
      }
  
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch trailer videos.");
        }
  
        const data = await response.json();
  
        // Filter for official trailers
        const filteredData = data.results.filter(
          (element) =>
            element.type === "Trailer" && element.site === "YouTube" && element.official
        );
  
        const trailerVdo = filteredData.length
          ? filteredData[0]
          : data.results.filter(
              (element) =>
                  element.site === "YouTube" &&
                  (element.type === "Teaser" || element.type === "Clip")
              )[0] || null;
  
        dispatch(addCardVideo(trailerVdo));
        
      } catch (error) {
        console.error("Error fetching trailer videos:", error);
        dispatch(addCardVideo(null));
      }
    };
  
    useEffect(() => {
      getMovieVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]); // Added movieId as a dependency 

}

export default useCardVideo