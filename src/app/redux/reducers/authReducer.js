'use client'
import { NEW_USER } from "@/app/utils/urlConfig";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userInfo: undefined,
    newUser: false
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
        }
    },

    extraReducers: (builder) =>  {

    }
})

export const {setUserInfo, setNewUser} = authSlice.actions
export default authSlice.reducer;