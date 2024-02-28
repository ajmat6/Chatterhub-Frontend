import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GET_ALL_CONTACT } from '../utils/urlConfig'
import { BiArrowBack, BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setAllContactsPage } from '../redux/reducers/authReducer';
import ChatListItem from './ChatListItem';

// align is used for vertical position and justify is used for horizontal position
const ContactsList = () => {
    const [allContacts, setAllContacts] = useState({});
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getallContacts = async () => {
            try {
                const res = await axios.get(GET_ALL_CONTACT);
                console.log(res.data.users)
                setAllContacts(res.data.users);
                console.log("all contacts are ", allContacts)
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
        <div className='bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar '>
            <div className="flex py-3 items-center gap-3 h-14">
                <div className='bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-md flex-grow mx-4'>
                    <div>
                        <BiSearchAlt2 className='text-panel-header-icon cursor-pointer text-lg'/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Search Contacts..' 
                            className='bg-transparent text-sm focus:outline-none text-white w-full'
                        />
                    </div>
                </div>
            </div>
            {
                // object.entries(obj) return an array and each element of that array is also an array with [key, value]. Therfore [[key, value], [key, value]]
                Object.entries(allContacts).map(([initialLetter, userList]) => {
                    return (
                        <div key={Date.now() + initialLetter}>
                            <div className='text-teal-light pl-10 py-5'>{initialLetter}</div>
                            {
                                userList.map((contact) => {
                                    return (<ChatListItem 
                                        data = {contact}
                                        isContactPage = {true} // to distinguish b/w contact page and main chat page
                                        key={contact.id}
                                    />)
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ContactsList