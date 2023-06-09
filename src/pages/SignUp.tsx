import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Style'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import OAuth from '../component/OAuth';


type FormData = {
  fullname: string;
  email: string;
  password: any;
  timestamp?: any;
};

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: ""
  })

  const {fullname, email, password} = formData
  const navigate = useNavigate()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const userr = auth.currentUser;
      
      if (userr) {
        updateProfile(userr, {
          displayName: fullname
        });
      }


      const user = userCredential.user;
      const formDataCopy = {...formData}
      delete formDataCopy.password

      // Add a timestamp property to the formDataCopy object
      // The timestamp is obtained from the serverTimestamp() function
      formDataCopy.timestamp = serverTimestamp()

      // Write the formDataCopy object to the Firestore "users" collection with the user's UID as the document ID
      await setDoc(doc(db, "users", user.uid), formDataCopy)
      // navigate to homepage
      navigate("/")
      toast.success("Sign up was successful")
      // console.log(user)

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong with the registration")
    }
  }


  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`lg:w-[50%] ${styles.flexCenter} mt-[4rem]`}>
        <div className={``}>
          <h1 className={`${styles.h5Style}`}>Register as a Writer/Reader</h1>
          <div className='py-6'>
            <div>
              <form onSubmit={handleSubmit} >
                <input 
                  placeholder='FullName'
                  className='w-full h-12 border px-2 my-1'
                  type='text'
                  value={fullname}
                  id='fullname'
                  onChange={handleInput}
                />
                <input 
                  placeholder='Email'
                  className='w-full h-12 border px-2 my-1'
                  type='email'
                  value={email}
                  id='email'
                  onChange={handleInput}
                />
                <input 
                  placeholder='Password'
                  className='w-full h-12 border px-2 my-2'
                  value={password}
                  id='password'
                  type='password'
                  onChange={handleInput}
                />

                <div className='flex justify-between w-full my-2'>
                  <p>Don't Have an account? <Link to="/signup" className='text-blue-500'>Sign In</Link> </p>
                  <Link to="" className='text-red-500'>Forgot Password</Link>
                </div>

                <button type='submit' className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-blue-500 shadow-md hover:shadow-lg rounded hover:bg-blue-700`}>
                  Sign Up
                </button>

                <div className={`${styles.flexCenter} gap-4 `}>
                  <div className='border border-gray-400 w-[50%]'/>
                  <p>OR</p>
                  <div className='border border-gray-400 w-[50%]'/>
                </div>

                <OAuth />
                
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp