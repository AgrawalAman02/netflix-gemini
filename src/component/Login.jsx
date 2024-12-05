import React, { useState } from 'react'
import Header from './Header'
import LoginBg from "../assets/images/LoginBg.jpg"

const Login = () => {
  const [isSignIn , setIsSignIn] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const togglesignIn=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div className='relative min-h-screen text-white bg-black'>
      <Header/>
      <img src={LoginBg} alt="LoginBg" className='absolute  z-10  h-full w-full object-cover opacity-65' />
      <div className='absolute bg-[#000000d4] w-[28rem] flex flex-col gap-8 rounded-md opacity-95 items-start px-16 justify-center py-8 mx-auto top-0 right-0 left-0  z-40 my-24 '>
        <h2 className='font-bold text-3xl '>{isSignIn? "Sign In " : "Sign Up"}</h2>
        <form className=' flex flex-col items-center gap-4 '>
          
          <input type="text" placeholder='Name' className={`${!isSignIn? "flex" : "hidden"} p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]`} />
          <input type="number" placeholder='Mobile No.' className={`${!isSignIn? "flex" : "hidden"} p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]`} />
          
          <input type="email" placeholder='Email' className='p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]' />
          <input type="password" placeholder='Password' className={`${isSignIn? "flex" : "hidden"} p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]`} />
          
          <input type="password" placeholder='Create password' className={`${!isSignIn? "flex" : "hidden"} p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]`} />
          <input type="password" placeholder='Confirm password' className={`${!isSignIn? "flex" : "hidden"} p-4 py-6 w-[20rem] rounded-md h-[3.3rem] border border-gray-600 bg-[#80808015]`} />

          <button className='p-2 py-6 w-[20rem] rounded-md h-[3.3rem] bg-[#fb1b1b] text-white font-semibold flex justify-center items-center'>{isSignIn? "Sign In " : "Sign Up"}</button>
          
          <h2 className={`${isSignIn? "flex" : "hidden"} font-medium text-lg`}>OR</h2>

          <button 
            className={`${isSignIn? "flex" : "hidden"} p-2 py-6 w-[20rem] rounded-md h-[3.3rem] bg-[#ffffff30] text-white font-semibold flex justify-center items-center`}
            >Use a sign-in code
          </button>
          <button  className={`${isSignIn? "flex" : "hidden"}`}>Forgot password?</button>

        </form>
        <div className={`${isSignIn? "flex" : "hidden"} items-center w-full -mt-4 `}>
          <input 
            type="checkbox" 
            id="rememberMe" 
            checked={rememberMe} 
            onChange={() => setRememberMe(!rememberMe)} 
            className='mr-2 w-4 h-4'
          />
          <label htmlFor="rememberMe" >Remember me</label>
        </div>

        <div className='flex items-center w-full -mt-4 gap-1'>
          <span className='text-gray-400'>{isSignIn? "New to Netflix?" : "Already a user?"}</span>
          <button 
            className='font-medium'
            onClick={()=>togglesignIn()}
            >
              {isSignIn ? "Sign In" : "Sign Up Now"}
          </button>
        </div>

        <div>
          <p className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/" className='text-blue-600'>Learn more.</a></p>
        </div>

      </div>
    </div>
  )
}

export default Login