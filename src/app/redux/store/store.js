'use client'

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import messageReducer from "../reducers/messageReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer
    }
})

export default store;