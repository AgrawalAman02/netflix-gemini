import React, { useRef, useState } from 'react'
import LoginBg from "../assets/images/LoginBg.jpg"
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { model } from '../utils/genAi'
import { addSearchResult, decreaseCount } from '../utils/gptSlice'
import { API_OPTIONS } from '../utils/constants'
import AiSuggestion from './AI_Suggestion'

const GptSearch = () => {
  const searchText = useRef(null);
  const [searchInput, setSearchInput ] = useState("");
  const dispatch = useDispatch();
  const count = useSelector(store=>store.gpt.count);
  const [isLoading, setIsLoading] = useState(false);
  const langValue = useSelector((store)=>store.appConfig.lang);

  const handleSearchResults  = async (movie)=>{
    
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='
      +movie+
      '&include_adult=true&language=en-US&page=1&region=IN',
      API_OPTIONS
    );

    const data = await response.json();
    if(!data) return null;
    return data;
  }

  const handleAI= async ()=>{
    setIsLoading(true);
    // make an api call to genAi and get the Movie results
    dispatch(addSearchResult({ movieNames: null, movieList: null }));

    const prompt = "Act as a movie Recommendation system and suggest five Netflix movies for the query : " + 
        searchText.current.value  +
        ".Only give me name of five movies comma seprated like the examples result given ahead. Example result : Pushpa 2 : the Rule, Avengers, koi mil gya , Animal , Gadar";

    const result = await model.generateContent(prompt);
    const movieNameList = result.response.text().split(",");
    const promiseList = movieNameList.map((movie)=>handleSearchResults(movie));
    // this will return a list of promise , so the issue is that i dont know which promise will executed first , so i use Promise.all()

    const movieList =await Promise.all(promiseList);
    dispatch(addSearchResult({ movieNames :movieNameList,movieList : movieList}));
    setIsLoading(false);
  
  }

  return (
    <div className='relative min-h-screen w-full scrollbar-hide overflow-auto'>
      <img src={LoginBg} alt="LoginBg" className='absolute inset-0 z-10 h-full w-full object-cover opacity-20' />
      <div className='bg-red-700 w-[45rem] fixed left-1/4 top-6 z-30 p-1 h-11 rounded-2xl shadow-lg '>
        <form action="submit" className='flex gap-2' onSubmit={(e)=>{
          e.preventDefault()
          count && handleAI();
          setSearchInput("");
          dispatch(decreaseCount());
        }}>
          <input 
            type="text" 
            ref={searchText}
            placeholder={count ? ( lang[langValue].searchPlaceHolder + `    -(You have ${count} search left! )`) : `Sorry , you hae no searches left! :( )`} 
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === "") {
                dispatch(addSearchResult({ movieNames: null, movieList: null }));
              }
            }}
            aria-label="Search movies"
            className='w-full p-2 px-4 h-9 rounded-xl focus:outline-none text-stone-950'
            onFocus={() => {
              if (searchInput === "") {
                dispatch(addSearchResult({ movieNames: null, movieList: null }));
              }
            }}
          />
         
        </form>
      </div>

      <div className='relative z-20 mt-20 p-4'>
      {isLoading ? (
          <div className='flex justify-center items-center'>
            <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span className='ml-2 text-blue-500'>Loading...</span>
          </div>
        ) : (
          <AiSuggestion />
        )}
      </div>
    </div>
  )
}

export default GptSearch