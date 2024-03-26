import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socket: undefined
}

const socketSlice = createSlice({
    name: 'socket', 
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload
        }
    }
})

export default socketSlice.reducer
export const {setSocket} = socketSlice.actions