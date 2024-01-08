'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
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