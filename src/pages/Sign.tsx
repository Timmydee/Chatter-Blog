import React, {useState} from 'react'
import signs from '../assets/login.png'
import SignUp from './SignUp'
import SignIn from './SignIn'



const Sign = () => {
  const [swipe, setSwipe] = useState("register")

  const onClick = () => {
    if(swipe === "register"){
      setSwipe("login")
    }
    else{
      setSwipe("register")
    }
  }
  return (
    
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row' >
        <div className='w-[40vw] lg:flex hidden'>
          <img src={signs} className='object-fill w-full border h-[100vh] '/>
        </div>
        <div className='mx-auto'>
          <div className='flex gap-5 items-center justify-center'>
            <div onClick={onClick} className={`cursor-pointer ${swipe === 'register' ? "border-b-2 border-blue-600" : ""}`}>
              <h5>Register</h5>
              
            </div>
            <div onClick={onClick} className={`cursor-pointer ${swipe === 'login' ? "border-b-2 border-blue-600" : ""}`}>
              <h5>Login</h5>
            </div>
          </div>
          <div className='px-11'>
            {swipe === "register" ?
              <SignUp /> : <SignIn />
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Sign