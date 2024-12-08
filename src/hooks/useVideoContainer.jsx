import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoContainer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo);

  const getMovieVideos = async () => {
    if (!movieId) {
      dispatch(addTrailerVideo(null));
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

      dispatch(addTrailerVideo(trailerVdo));
      
    } catch (error) {
      console.error("Error fetching trailer videos:", error);
      dispatch(addTrailerVideo(null));
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]); // Added movieId as a dependency
};

export default useVideoContainer;