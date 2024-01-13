'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/input'
import defaultAvatar from '../../../public/default_avatar.png'
import Avatar from '../components/Avatar'
import axios from 'axios'
import { setNewUser, setUserInfo, verifyNewUser } from '../redux/reducers/authReducer'
import { NEW_USER } from '../utils/urlConfig'
import { useRouter } from 'next/navigation'

const onboarding = () => {
  const auth = useSelector((state) => state.auth)
  const newUser = auth.newUser;
  const userInfo = auth.userInfo;
  const dispatch = useDispatch();
  const router = useRouter();

  const [personName, setPersonName] = useState(auth.userInfo.name ? auth.userInfo.name : "")
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(defaultAvatar)

  // if page refreshes
  useEffect(() => {
    if(!newUser && !userInfo?.email) router.push('/login')
    else if(!newUser && userInfo.email) router.push('/')
  }, [newUser, userInfo, router])

  const validateDetails = () => {
    if(personName.length < 3) return false;
    if(about.length < 3) return false;
    return true;
  }

  const createProfileHandler = async () => {
    if(validateDetails())
    {
      const email = auth.userInfo.email;
      try 
      {
        const form = {
          name: personName,
          about,
          email,
          profilePic: image
        }

        const res = await axios.post(NEW_USER, form);
        if(res.data.status)
        {
          const {_id, name, about, email, profilePic} = res.data.user;
          const obj = {_id, name, about, email, profileImage: profilePic};
          dispatch(setNewUser(false));
          dispatch(setUserInfo(obj));
          router.push('/')
        }
      }
      catch (err) 
      {
        console.log(err)
      }
    }
  }

  return (
    <div className='bg-panel-header-background  h-screen w-screen text-white flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-2'>
        <Image src='/whatsapp.gif' alt='chatterhub' height={300} width={300}/>
        <span className='text-7xl '>Chatterhub</span>
      </div>
      <h2 className="text-2xl">Create your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input name={"Display Name"} state={personName} setState={setPersonName} label={true}/>
          <Input name={"About"} state={about} setState={setAbout} label={true}/>
          <div className='flex items-center justify-center'>
            <button 
              className='flex items-center justify-center gap-3 bg-search-input-container-background p-5 rounded-lg'
              onClick={createProfileHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type={'xl'} image={image} setImage={setImage}/>
        </div>
      </div>
    </div>
  )
}

export default onboarding