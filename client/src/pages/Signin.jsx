import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
import { signInFailure, signInStart, signInSuccess} from '../redux/user/userslice'
import {useDispatch,useSelector} from 'react-redux'
import OAuth from '../components/OAuth'


export default function SignIn() {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})
  const {loading, error} = useSelector((state)=>state.user)
   const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
   }

  const submitHandler= async(e)=>{
    e.preventDefault()
    try {
      dispatch(signInStart())
      const response= await fetch('api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
      })
      const result= await response.json()
      if (result.success===false){
        dispatch(signInFailure(result.message))
        return;
      }
     dispatch(signInSuccess(result))
      navigate('/')
        
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  } 

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={submitHandler}>
        <input className='border p-3 rounded-lg ' id='email'
          type='email' placeholder='email' onChange={handleChange}/>
        <input className='border p-3 rounded-lg ' id='password'
          type='password' placeholder='password' onChange={handleChange}/>
        <button className='text-white bg-slate-700 p-3 rounded-lg
         hover:opacity-95 disabled:opacity-85 uppercase'>{loading ?'Loading...':'Sign In'}</button>
         <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Signup</span>
        </Link>
      </div>
      {error && <span className='text-red-500 text-center'>{error}</span> }

      
    </div>
  )
}
