import {configureStore} from '@reduxjs/toolkit'
import { categoryReducer } from './slices/categorySlice'
import { bookReducer } from './slices/bookSlice'
const store = configureStore({
    reducer:{
        category:categoryReducer,
        book:bookReducer
    }
})
export default store