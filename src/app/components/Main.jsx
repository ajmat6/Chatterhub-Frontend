import React, { useEffect, useState } from 'react'
import Chatlist from './Chatlist'
import Empty from './Empty'
import { onAuthStateChanged } from 'firebase/auth'
import { firebasAuth } from '../utils/firebaseConfig'
import { CHECK_USER } from '../utils/urlConfig'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../redux/reducers/authReducer'
import axios from 'axios'
import Chat from './Chat'

const Main = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();
    const [redirectLogin, setRedirectLogin] = useState(false);

    useEffect(() => {
        if(redirectLogin) router.push('/login')
    }, [redirectLogin])

    // below is a firebase function which will act as useEffect whenever the page loads and checks if there is any user present in the firebaase auth and returns  it in callback:
    onAuthStateChanged(firebasAuth, async(currentUser) => {
        if(!currentUser) setRedirectLogin(true); // if no user found in firebase auth, redirect to login
        if(!auth.userInfo && currentUser?.email) { // if user found and userInfo is undefined in auth state, then again fetch the user info
            const {data} = await axios.post(CHECK_USER, {email: currentUser?.email});
            if(!data.status) router.push('/login');
            else {
                const {_id, name, about, email, profilePic} = data.user;
                const obj = {_id, name, about, email, profileImage: profilePic};
                dispatch(setUserInfo(obj));
            }
        }
    })
  return (
    <>
      <div
        className='grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden'
      >
        <Chatlist />
        {
          !auth.currentChatUser ?
          <Empty /> :
          <Chat />
        }
      </div>
    </>
  )
}

export default Main