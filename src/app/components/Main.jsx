import React, { useEffect, useRef, useState } from 'react'
import Chatlist from './Chatlist'
import Empty from './Empty'
import { onAuthStateChanged } from 'firebase/auth'
import { firebasAuth } from '../utils/firebaseConfig'
import { CHECK_USER, GET_MESSAGES_ROUTE, HOST } from '../utils/urlConfig'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../redux/reducers/authReducer'
import axios from 'axios'
import Chat from './Chat'
import { addMessage, setMessages } from '../redux/reducers/messageReducer'
import { io } from 'socket.io-client'
import { setSocket } from '../redux/reducers/socketReducer'

const Main = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();
    const [redirectLogin, setRedirectLogin] = useState(false);
    const [socketEvent, setSocketEvent] = useState(false);
    const socket = useRef();

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

    // socket io frontend connection: when there is userInfo in auth
    useEffect(() => {
      socket.current = io(HOST); // passing host for the cors
      socket.current.emit('add-user', auth.userInfo?._id) // emit can be any event like add-user etc that will handled as socket.on('add-user', ...) in backend
      
      // storing socket into reducer:
      dispatch(setSocket(socket.current));
    }, [auth.userInfo])

    // when we recieve message from server: all those messages that is recieved to us while we were offline:
    useEffect(() => {
      console.log("socket changed")
      if(socket.current && !socketEvent) {
        console.log("inside")
        socket.current.on("msg-recieve", (data) => {
          console.log("inside2")
          // add the message recieved from backend into the reducer:
          dispatch(addMessage(data.message.message));
        })
        setSocketEvent(true);
      }
    }, [socket.current])

    // when we click on any person chat than that person should be set as current chat user and we have to get all the messages regarding that user:
    useEffect(() => {
      const getMessages = async () => {
        console.log("users ", auth?.userInfo._id, auth?.currentChatUser._id)
        const res = await axios.get(`${GET_MESSAGES_ROUTE}/${auth?.userInfo._id}/${auth?.currentChatUser._id}`);
        console.log(res);
        dispatch(setMessages(res.data.messages));
      }
      if(auth.currentChatUser?._id) getMessages();
    }, [auth.currentChatUser])

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