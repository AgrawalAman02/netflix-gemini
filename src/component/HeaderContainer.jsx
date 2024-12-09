import React from 'react'
import Header from './Header';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from "../assets/images/search.svg"
import GptSearch from "./GptSearch.jsx";
import { addSearchResult, toggleGptSearch } from '../utils/gptSlice.jsx';
import { SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { changeLanguage } from '../utils/configSlice.jsx';
import lang from '../utils/languageConstants.jsx';

const HeaderContainer = () => {

    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    const showGpt = useSelector((store)=>store.gpt.showGptSearch);
    const langValue = useSelector((store)=>store.appConfig.lang);

    const handleSignOutClick= ()=>{
      signOut(auth).catch((error) => {
        navigate("/error")
      });
    //   dispatch(toggleGptSearch(false));
      dispatch(addSearchResult({movieNames : null, movieList : null}));
    }

    const handleSearchClick=()=>{
      dispatch(toggleGptSearch());
    }

    const handleLanguageChange =(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div>
        <div className='header'>
            <Header/>
            {user && showGpt && <GptSearch/>}
            <div className='flex gap-2 md:gap-4  fixed z-40 right-2 md:right-12 top-3 md:top-6'>
                {user && user.photoURL && (
                <>
                    {showGpt &&  <select 
                        name="langSelect" 
                        id="langSelect" 
                        className=' rounded-xl bg-red-600  font-medium md:font-semibold text-sm md:text-base bg-opacity-40 p-0.5 px-0.5 md:px-2'
                        onChange={(e)=>handleLanguageChange(e)}
                    >
                        {
                            SUPPORTED_LANGUAGES.map((lang)=>(
                                <option className=' rounded-xl text-black font-semibold' key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                            ))
                        }
                    </select>
                    }
                    <button onClick={()=>handleSearchClick()} className='cursor-pointer  min-w-fit'>
                        {
                            showGpt ? 
                            <p className='h-8 min-w-12 md:min-w-20 md:h-10 px-1 bg-white rounded-lg text-[#f22626] font-semibold md:font-bold text-sm md:text-base flex items-center justify-center'>{lang[langValue].home}</p>
                            :
                            <img src={searchIcon} alt="Search " className='h-8 md:h-10' />
                        }
                    </button>
                    <img src={user.photoURL} alt="User Avatar" className='w-8 h-8 md:w-10 md:h-10 rounded-md' />
                </>
                )}
                <button 
                className='h-8 min-w-16 md:min-w-20 md:h-10 px-1 bg-[#f22626] rounded-lg text-white font-semibold md:font-bold text-sm md:text-base'
                onClick={()=>handleSignOutClick()}
                >{showGpt? lang[langValue].signOut : "Sign Out"}</button>
                
            </div>
        </div>
    </div>
  )
}

export default HeaderContainer