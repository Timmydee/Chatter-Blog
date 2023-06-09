import React from 'react'
import styles from '../Style'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {toast} from "react-toastify"
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';



const OAuth = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const onGoogleClick = async () => {
        try {
            const response = await signInWithPopup(auth, new GoogleAuthProvider())

            const user = response.user
            console.log(user)

            // check if the user in the db
            const docRef = doc(db, "users", user.uid)

            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()) {
                setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timeSnap: serverTimestamp()
                })
            }
            toast.success("Sign up successful")
            navigate('/')
        }
        catch(error) {
            console.log(error)
            toast.error("Could not authenticate with Google")
        }
   
    }
  return (
    <div>
        <button type='button' onClick={onGoogleClick} className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 shadow-md hover:shadow-lg rounded hover:bg-red-700`}>
            Continue with Google
        </button>
    </div>
  )
}

export default OAuth