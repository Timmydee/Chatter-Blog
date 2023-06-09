import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../Style'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

type form = {
  email: string;
}

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<form>({
    email: "",
  })

  const {email} = formData

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email Reset was successfully")

    } catch (error) {
      console.log(error)
      toast.error("Something happened")
    }
  }


  return (
    <div className={`${styles.innerWidth} ${styles.flexCenter}`}>
      <div className={`lg:w-[50%] ${styles.paddings} ${styles.flexCenter} mt-[4rem]`}>
        <div className={``}>
          <h1 className={`${styles.h2Style}`}>Sign In to 6ameOn</h1>
          <div className='py-6'>
            <div>
              <form onSubmit={handleSubmit} >
                <input 
                  placeholder='Email'
                  className='w-full h-12 border px-2 my-1'
                  type='email'
                  value={email}
                  id='email'
                  onChange={handleInput}
                />

                <div className='flex justify-between w-full my-2'>
                  <p>Don't Have an account? <Link to="/signup" className='text-blue-500'>Register</Link> </p>
                  <Link to="" className='text-red-500'>Sign In</Link>
                </div>

                <button type='submit' className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-blue-500 shadow-md hover:shadow-lg rounded hover:bg-blue-700`}>
                  Sign In
                </button>

                <div className={`${styles.flexCenter} gap-4 `}>
                  <div className='border border-gray-400 w-[50%]'/>
                  <p>OR</p>
                  <div className='border border-gray-400 w-[50%]'/>
                </div>

                <button className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-red-500 shadow-md hover:shadow-lg rounded hover:bg-red-700`}>
                  Sign In with Google
                </button>
                
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword