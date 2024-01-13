import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg ' id='username'
          type='text' placeholder='username'/>
        <input className='border p-3 rounded-lg ' id='email'
          type='email' placeholder='email'/>
        <input className='border p-3 rounded-lg ' id='password'
          type='password' placeholder='password'/>
        <button className='text-white bg-slate-700 p-3 rounded-lg
         hover:opacity-95 disabled:opacity-85 uppercase'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
