import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice";

const createStore = configureStore({
    reducer: {
        users: userReducer,
        
    }
})

export default store;