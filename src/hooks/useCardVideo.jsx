// useCardVideo.js

import { useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useCardVideo = (movieId) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        const trailerVideo =
          data.results.find(
            (video) =>
              (video.name.toLowerCase().includes('trailer')|| video.name.toLowerCase().includes('teaser')  )&&
              video.site === 'YouTube'
          ) || data.results[0];

        setTrailer(trailerVideo);
      } catch (error) {
        console.error('Error fetching trailer videos:', error);
        setTrailer(null);
      }
    };

    getMovieVideos();
  }, [movieId]);

  return  [trailer, setTrailer];
};

export default useCardVideo;    