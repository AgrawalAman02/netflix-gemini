// src/component/MainContainer.jsx

import React, { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      
      setMainMovie(movies[13]);
    }
  }, [movies]);

  if (!mainMovie) return null;

  const { title, overview, id } = mainMovie;

  return (
    <div className="relative z-10">
      <VideoTitle title={title} overview={overview} />
      <VideoContainer movieId={id} />
    </div>
  );
};

export default MainContainer;