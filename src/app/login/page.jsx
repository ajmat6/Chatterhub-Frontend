"use client" // use client have to be used for loginbutton and useRouter as they can be used in client components only and a component is by default server side

import React, { useEffect } from 'react'
import Image from 'next/image'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebasAuth } from '../utils/firebaseConfig'
import axios from 'axios'
import { CHECK_USER } from '../utils/urlConfig'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setNewUser, setUserInfo } from '../redux/reducers/authReducer'

const login =  () => {
  const router = useRouter();  // used for the navigation: router.push(/onboarding) will take you to the /onboarding url
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userInfo = auth.userInfo;
  const newUser = auth.newUser;

  useEffect(() => {
    if(userInfo?.name && !newUser) router.push('/')
  }, [userInfo, newUser])

  const loginButton = async () => {
    const provider = new GoogleAuthProvider() // from firebase
    const {user} = await signInWithPopup(firebasAuth, provider);
    const name = user.displayName;
    const email = user.email;
    const photo = user.photoURL;

    try
    {
      if(email)
      {
        const user = await axios.post(CHECK_USER, {email});
        const data = user.data;
        if(data.status == false)
        {
          const obj = {name, email, profileImage: photo, status: ""};
          dispatch(setNewUser(true))
          dispatch(setUserInfo(obj))
          router.push('/onboarding')
        } 
        else {
          const obj = {name, email, profileImage: photo, status: ""};
          dispatch(setUserInfo(obj));
        }
      }
    }
    catch(err) 
    {
      console.log(err);
    }
  }

  return (
    <div className='flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6'>
      <div className='flex items-center justify-center gap-2 text-white'>
        <Image src='/whatsapp.gif' alt='whatsapp' height={300} width={300}/>
        <span className='text-7xl '>Chatterhub</span>
      </div>
      <button className='flex items-center justify-center gap-3 bg-search-input-container-background p-5 rounded-lg' onClick={loginButton}>
        <FcGoogle className='text-4xl'/>
        <span className='text-white text-2xl'>Login with Google</span>
      </button>
    </div>
  )
}

export default login