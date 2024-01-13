import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/user/userslice.js'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async()=>{
        try {
            const Provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth,Provider)
            console.log("name",result.user.photoURL)
            const response = await fetch('api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL})
            })
            const data= await response.json()
            console.log("data",data)
            dispatch(signInSuccess(data))
            navigate('/')
            
        } catch (error) {
            console.log('could not sign in with google...!')
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>continue with google</button>
  )
}
