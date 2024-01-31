import {configureStore} from '@reduxjs/toolkit'
import { categoryReducer } from './slices/categorySlice'
import { bookReducer } from './slices/bookSlice'
import { authReducer } from './slices/authSlice'
const store = configureStore({
    reducer:{
        category:categoryReducer,
        book:bookReducer,
        auth:authReducer
    }
})
export default store