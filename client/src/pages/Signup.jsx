import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate= useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
   const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
   }

  const submitHandler= async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const response= await fetch('api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
      })
      const result= await response.json()
      if (result.success===false){
        setError(result.message)
        setLoading(false)
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/signin')
        
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  } 
  console.log(error)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={submitHandler}>
        <input className='border p-3 rounded-lg ' id='username'
          type='text' placeholder='username'onChange={handleChange} />
        <input className='border p-3 rounded-lg ' id='email'
          type='email' placeholder='email' onChange={handleChange}/>
        <input className='border p-3 rounded-lg ' id='password'
          type='password' placeholder='password' onChange={handleChange}/>
        <button className='text-white bg-slate-700 p-3 rounded-lg
         hover:opacity-95 disabled:opacity-85 uppercase'>{loading ?'Loading...':'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>SignIn</span>
        </Link>
      </div>
      {error && <span className='text-red-500 text-center'>{error}</span> }

      
    </div>
  )
}
