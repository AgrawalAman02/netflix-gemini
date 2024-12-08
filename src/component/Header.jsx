import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import netflixIcon from "../assets/images/Netflix_Logo_PMS.png"
import { onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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
        navigate("/");
      }
    });
    
    return ()=>unsubscribe();

  },[]);
  return (
    <div className={`fixed ${loggedIn?"px-[1.5rem]":"px-[9.7rem] bg-gradient-to-b from-black"}  py-2  h-20 z-30`}>
        <img src={netflixIcon} alt="netfloxIcon"  className='w-[11.5rem] h-[4.8rem]'/>
    </div>
  )
}

export default Header