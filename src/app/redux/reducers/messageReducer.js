import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
}

export const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload
        },

        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload]
        }
    }
})

export const {setMessages, addMessage} = messageSlice.actions
export default messageSlice.reducer