import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import netflixIcon from "../assets/images/Netflix_Logo_PMS.png"
import { onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { resetGptState } from '../utils/gptSlice';
import netflixMobile from "../assets/images/favicon.png"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setLoggedIn(true);
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email : email , displayName : displayName,photoURL:photoURL})); 
        
        navigate("/browse");
      } else {
        // User is signed out
        setLoggedIn(false)
        dispatch(removeUser());
        dispatch(resetGptState()); 
        navigate("/");
      }
    });
    
    return ()=>unsubscribe();

  },[]);

  return (
    <div className={`fixed ${loggedIn?" md:px-[1.5rem] ":"px-[6.6rem] md:px-[9.7rem] bg-gradient-to-b from-black"} py-3 md:py-2 h-16  md:h-20 z-30`}>
        <img src={netflixIcon} alt="netfloxIcon"  className={` ${loggedIn ? "hidden md:block md:w-[11.5rem]  md:h-[4.8rem]" : "w-[11rem] md:w-[11.5rem] h-[4.2rem] md:h-[4.8rem]"}  w-[11rem] md:w-[11.5rem] h-[4.2rem] md:h-[4.8rem]`}/>
        <img src={netflixMobile} alt="netflixIconS" className={`${loggedIn ? "md:hidden h-[2rem] w-[3rem]":" hidden"} `} />
    </div>
  )
}

export default Header