import React,{useState} from 'react'
import FeedScreen from './DashboardLayout'
import styles from '../Style'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

interface Form {
  name: string,
  email: string
}

export const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate()

  const [formData, seFormData] = useState<Form>({
    name: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
  })

  const {name, email} = formData

  function logOut (){
    auth.signOut()
    toast.success("Logged Out Successfully")
    navigate('/')
  }
  return (
    <FeedScreen>
      <div className={`${styles.flexCenter}`}>
      <div className={`lg:w-[50%] ${styles.flexCenter} mt-[4rem]`}>
        <div className={``}>
          <h1 className={`${styles.h5Style}`}>Your Profile</h1>
          <div className="py-6">
            <div>
              <form>
                <input
                  className="w-full h-12 border px-2 my-1"
                  type="email"
                  value={name}
                  id="email"
                  // onChange={handleInput}
                />
                <input
                  className="w-full h-12 border px-2 my-2"
                  value={email}

                  
                  // onChange={handleInput}
                />

                <div className={`${styles.flexBetween}`}>
                  <p className='text-blue-500'>
                    Do you want to make changes to your name ?
                  </p>
                  <p className="text-red-400 cursor-pointer">Edit</p>
                </div>

                <button
                  onClick={logOut}
                  className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-blue-500 shadow-md hover:shadow-lg rounded hover:bg-blue-700`}
                >
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FeedScreen>
  )
}
