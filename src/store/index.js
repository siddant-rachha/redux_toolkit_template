import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import alphabetReducer from './alphabetSlice'
import thunkReducer from './thunkSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alphabet: alphabetReducer,
    thunkCounter: thunkReducer
  },
})