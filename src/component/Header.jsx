import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import netflixIcon from "../assets/images/Netflix_Logo_PMS.png"
import { onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email : email , displayName : displayName,photoURL:photoURL}));  
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return ()=>unsubscribe();

  },[]);
  return (
    <div className='absolute bg-gradient-to-b from-black px-[9.7rem] py-2 w-full h-20 z-30'>
        <img src={netflixIcon} alt="netfloxIcon"  className='w-[11.5rem] h-[4.8rem]'/>
    </div>
  )
}

export default Header