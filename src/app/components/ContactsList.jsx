import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GET_ALL_CONTACT } from '../utils/urlConfig'
import { BiArrowBack, BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setAllContactsPage } from '../redux/reducers/authReducer';

const ContactsList = () => {
    const [allContacts, setAllContacts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getallContacts = async () => {
            try {
                const res = await axios.get(GET_ALL_CONTACT);
                console.log(res.data)
                setAllContacts(res.data.users);
            }
            catch(err) {
                console.log(err);
            }
        }
        getallContacts();
    }, [])
    
  return (
    <div className='h-full flex flex-col'>
        <div className='h-24 flex items-end px-3 py-4'>
            <div className='flex items-center gap-12 text-white'>
                <BiArrowBack className='cursor-pointer text-xl' onClick={() => dispatch(setAllContactsPage())}/>
                <span>New Chat</span>
            </div>
        </div>
        <div className='bg-search-input-container-background flex items-center gap-5 px-3 py-1 rounded-md flex-grow'>
            <div>
                <BiSearchAlt2 className='text-panel-header-icon cursor-pointer text-lg'/>
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='Start a new chat!' 
                    className='bg-transparent text-sm focus:outline-none text-white w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default ContactsList