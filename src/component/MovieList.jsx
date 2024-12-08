import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ListTitle, movies}) => {
    // const {title,id,poster_path} = movies;
    if(!movies) return;
  return (
    <div className='flex flex-col px-1 py-1  md:px-4 md:py-4'>
        <h2 className='text-2xl font-semibold  w-fit border-l-4 pl-4 pt-2 border-t-2'>{ListTitle}</h2>
        <div className='flex flex-nowrap gap-3 border-b items-start  overflow-x-auto scrollbar-hide scroll-smooth  '>
            {   
                movies?.map((item)=>(
                    item.poster_path &&
                    <MovieCard 
                        key={item.id} 
                        id={item.id} 
                        photoUrl={item.poster_path} 
                        title={item.title}
                        overview={item.overview}
                        release = {item.release_date}
                        average = {item.vote_average}
                    />      
                ))
            }

        </div>

    </div>
  )
}

/*
adult
: 
false
backdrop_path
: 
"/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg"
genre_ids
: 
(3) [28, 12, 36]
id
: 
558449
original_language
: 
"en"
original_title
: 
"Gladiator II"
overview
: 
"Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people."
popularity
: 
1248.855
poster_path
: 
"/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"
release_date
: 
"2024-11-15"
title
: 
"Gladiator II"
video
: 
false
vote_average
: 
6.66
vote_count
: 
974

*/
export default MovieList