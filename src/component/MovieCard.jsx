import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import useCardVideo from "../hooks/useCardVideo";
import playIcon from "../assets/images/play.svg";
import { setActiveCardId } from "../utils/movieSlice";

const MovieCard = ({ photoUrl, title, id, release, average }) => {
  const dispatch = useDispatch();
  const activeCardId = useSelector((state) => state.movies.activeCardId);
  const isActive = activeCardId === id; // Check if this card is active
  const [trailer, setTrailer] = useCardVideo(isActive ? id : null);

  const handleCardClick = () => {
    if (isActive) {
      dispatch(setActiveCardId(null));
      setTrailer(null);
    } else {
      dispatch(setActiveCardId(id));
    }
  };

  const handleMouseLeave = () => {
    if (isActive && window.innerWidth > 768) {
      // Reset only on desktop
      dispatch(setActiveCardId(null));
    }
  };

  return (
    <div>
      <div
        className="flex flex-col gap-0.5 md:gap-2 w-48 flex-shrink-0 md:mb-2 cursor-pointer group"
        onClick={handleCardClick}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-40 md:w-48 h-52 md:h-60 relative">
          {!isActive ? (
            <>
              <img
                src={IMG_CDN_URL + photoUrl}
                className="w-40 md:w-48 h-52 md:h-60 rounded-lg"
                alt={`${title} img`}
                loading="lazy"
              />
              <img
                className="absolute top-1 left-1 w-6 h-6 md:top-2 md:left-2 md:w-8 md:h-8 z-10"
                src={playIcon}
                alt="playicon"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </>
          ) : trailer == null ? (
            <div className="w-72 md:w-96 h-60 md:h-72 bg-black rounded-lg border-2 shadow-lg border-red-700 -ml-16 z-50 relative flex flex-col gap-1 bg-opacity-95">
              <img
                src={IMG_CDN_URL + photoUrl}
                className="w-72 md:w-96 h-40 md:h-48"
                alt={`${title} img`}
                loading="lazy"
              />
              <div className="font-bold text-base flex gap-1 justify-between items-start">
                <div className="flex flex-col gap-1 w-64 pl-2">
                  <p className="text-lg">{title}</p>
                </div>
                <div className="flex text-xs w-20 flex-col gap-1">
                  <p>{release}</p>
                  <p>{average} Avg</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-72 md:w-96 h-60 md:h-72 bg-black rounded-lg border-2 shadow-lg border-red-700 -ml-16 z-50 absolute flex flex-col gap-1 bg-opacity-95">
              <iframe
                title={title}
                className="aspect-video w-[17.8rem] md:w-[23rem] object-cover"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&modestbranding=1&rel=0`}
                allow="autoplay; encrypted-media"
              ></iframe>
              <div className="font-semibold md:font-bold text-base pl-2 flex gap-1 justify-between items-start">
                <div className="flex flex-col gap-1 w-64">
                  <p className="text-lg">{title}</p>
                </div>
                <div className="flex text-xs w-20 flex-col gap-1">
                  <p>{release}</p>
                  <p>{average} Avg</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="font-bold">
          {title.length > 35 ? title.slice(0, 35) + "..." : title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
