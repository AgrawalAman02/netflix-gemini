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
            <div className='flex gap-4  fixed z-40 right-12 top-6'>
                {user && user.photoURL && (
                <>
                    {showGpt &&  <select 
                        name="langSelect" 
                        id="langSelect" 
                        className=' rounded-xl bg-red-600 font-semibold bg-opacity-40 p-.5 px-2'
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
                            <p className='min-w-20 h-10 px-1 bg-white rounded-lg text-[#f22626] font-bold flex items-center justify-center'>Home</p>
                            :
                            <img src={searchIcon} alt="Search" />
                        }
                    </button>
                    <img src={user.photoURL} alt="User Avatar" className='w-10 h-10 rounded-md' />
                </>
                )}
                <button 
                className=' min-w-20 h-10 px-1 bg-[#f22626] rounded-lg text-white font-bold'
                onClick={()=>handleSignOutClick()}
                >{showGpt? lang[langValue].signOut : "Sign Out"}</button>
                
            </div>
        </div>
    </div>
  )
}

export default HeaderContainer