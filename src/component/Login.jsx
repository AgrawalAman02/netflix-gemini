import React, { useRef, useState } from 'react'
import Header from './Header'
import LoginBg from "../assets/images/LoginBg.jpg"
import { checkValidData } from '../utils/validation'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { AVATAR } from '../utils/constants'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const phNumberRef = useRef(null);

  // Function to clear error message
  const clearError = () => {
    setErrorMsg(null);
  };

  const handleButtonClick =async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    const message = checkValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMsg(message);

    if (message) {
      setIsLoading(false); 
      return;
    }

    // signIn / signUp logic
    if(!isSignIn) 
    {
      if (passwordRef.current.value !== confPasswordRef.current.value) {
        setErrorMsg("Passwords do not match");
        setIsLoading(false);
        return; // Prevent further execution
      }
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
              displayName: nameRef.current.value,
              // phoneNumber : phoneNo, 
              photoURL: AVATAR
            }).then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setIsLoading(false);
            }).catch((error) => {
              setErrorMsg(error.message);
              setIsLoading(false);
            });     
      })
        .catch((error) => {
          console.log(error.code+  " - "+  error.message);
          setErrorMsg('ERROR : Can\'t Sign-Up');
          setIsLoading(false);
      });
    }
    else 
    {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // console.log(user);
      setIsLoading(false);
      })
      .catch((error) => {
      console.log(error.code+  " - "+ error.message);
      setErrorMsg('ERROR : Invalid Credentials...');
      setIsLoading(false);
      });
    }
  }

  const togglesignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMsg(null); // Clear error message when toggling
  }

  return (
    <div className=' min-h-screen w-screen text-white bg-black'>
      <Header/>
      <img src={LoginBg} alt="LoginBg" className='absolute z-10 h-full w-full object-cover opacity-65' />
      <div className='absolute bg-[#000000d4] w-[28rem] flex flex-col gap-8 rounded-md opacity-95 items-start px-16 justify-center py-8 mx-auto top-0 right-0 left-0 z-40 my-24'>
        <h2 className='font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        {/* error msg */}
          {errorMsg && (
            <div className='bg-yellow-400 p-3 px-4 rounded-lg w-full '>
              <p className="text-black text-sm font-medium">{errorMsg}</p>
            </div>
          )}


        <form onSubmit={handleButtonClick} className='flex flex-col items-center gap-4'>

          

          {/* Conditionally rendered fields for Sign Up */}
          {!isSignIn && (
            <>
              <input 
                type="text" 
                placeholder='Name' 
                onFocus={clearError}
                ref={nameRef}
                className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
              />
              <input 
                type="number" 
                placeholder='Mobile No.' 
                onFocus={clearError}
                ref={phNumberRef}
                className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
              />
            </>
          )}

          {/* Email and Password Fields */}
          <input 
            type="email" 
            placeholder='Email' 
            required
            ref={emailRef} 
            onFocus={clearError}
            className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
          />
          {isSignIn && (
            <input 
              type="password" 
              placeholder='Password'
              required
              ref={passwordRef} 
              onFocus={clearError}
              className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
            />
          )}
          
          {/* Conditionally rendered fields for Sign Up */}
          {!isSignIn && (
            <>
              <input 
                type="password" 
                required
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}" 
                title="At least 8 characters, including uppercase, lowercase, number, and special character."
                placeholder='Create password' 
                ref={passwordRef} 
                onFocus={clearError}
                className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
              />
              <input 
                type="password" 
                required
                placeholder='Confirm password' 
                ref={confPasswordRef}
                onFocus={clearError}
                className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' 
              />
            </>
          )}

          

          <button 
            type="submit" 
            disabled={isLoading}
            className='p-2 py-6 w-[20rem] rounded-md h-[3.3rem] bg-[#fb1b1b] text-white font-semibold flex justify-center items-center'
          >
            {isLoading? "Loading..." :( isSignIn ? "Sign In" : "Sign Up")}
          </button>
          
          {isSignIn && <h2 className='font-medium text-lg'>OR</h2>}

          {isSignIn && (
            <>
              <button 
                type="button"
                className='p-2 py-6 w-[20rem] rounded-md h-[3.3rem] bg-[#ffffff30] text-white font-semibold flex justify-center items-center'
              >
                Use a sign-in code
              </button>
              <button type="button" className='text-white'>Forgot password?</button>
            </>
          )}
        </form>

        {/* Remember Me Checkbox */}
        {isSignIn && (
          <div className='flex items-center w-full -mt-4'>
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
              className='mr-2 w-4 h-4'
            />
            <label htmlFor="rememberMe" className='text-white'>Remember me</label>
          </div>
        )}

        {/* Toggle Sign In / Sign Up */}
        <div className='flex items-center w-full -mt-4 gap-1'>
          <span className='text-gray-400'>
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </span>
          <button 
            type="button"
            className='font-medium text-blue-500 hover:underline'
            onClick={togglesignIn}
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </button>
        </div>

        {/* reCAPTCHA Notice */}
        <div>
          <p className='text-xs'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="/" className='text-blue-600'>Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login