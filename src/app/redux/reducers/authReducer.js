'use client'

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userInfo: undefined,
    newUser: false,
    contactsPage: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },

        setNewUser: (state, action) => {
            state.newUser = action.payload
        },

        setAllContactsPage: (state) => {
            state.contactsPage = !state.contactsPage
        }
    }
})

export const {setUserInfo, setNewUser, setAllContactsPage} = authSlice.actions
export default authSlice.reducer;