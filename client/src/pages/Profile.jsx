import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../firebase.js'

export default function Profile() {
  const [file, setFile] = useState(undefined)
  const [fileperc, setFilePerc] =useState(0)
  const [fileUpladError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})
  const {currentUser} = useSelector((state)=>state.user)
  const fileRef = useRef(null)
  console.log(fileperc)
  console.log(formData)
  useEffect(()=>{
    if (file){
      handlefileUpload(file)
    }
    
  },[file])

  const handlefileUpload=(file)=>{
    const storage=getStorage(app)
    const filename= new Date().getTime()+ file.name;
    const storageRef= ref(storage, filename)
    const uploadTask=uploadBytesResumable(storageRef,file)

    uploadTask.on("state_changed",
      (snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)* 100
        setFilePerc(Math.round(progress))
      },
      (error)=>{
        setFileUploadError(true)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          setFormData({ ...formData, avatar:downloadURL})
        })
      },
      setFileUploadError(false)

    )
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl font-semibold my-7 text-center'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file'  onChange={(e)=>setFile(e.target.files[0])} ref={fileRef} accept='image/*' hidden/>
        <img  onClick={()=>fileRef.current.click()} className='rounded-full w-24 h-24 self-center object-cover cursor-pointer' src={formData.avatar || currentUser.avatar} alt='profile' />
        <p className='flex flex-col self-center  text-sm'>
          {fileUpladError?(
            <span className='text-red-700'>Error image upload(image should be less than 2Mb)</span>
          ):
          
            fileperc>0 && fileperc<100?
            <span className='text-slate-700'>{`Uploading... ${fileperc}%`}</span>
            : fileperc===100?<span className='text-green-600'>Image uploaded successfully...</span>
          
            :("")
          }
        </p>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700'>Delete account</span>
        <span className='text-red-700'>Signout</span>

      </div>
    </div>
  )
}
