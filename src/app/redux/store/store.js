'use client'

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import messageReducer from "../reducers/messageReducer";
import socketReducer from "../reducers/socketReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        socket: socketReducer
    }
})

export default store;