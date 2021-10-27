import { configureStore } from '@reduxjs/toolkit'
import {
  commonReducer,
  productReducer,
  userReducer,
  taskReducer,
} from './redux/reducers'

export const store = configureStore({
  reducer: {
    commonReducer,
    productReducer,
    userReducer,
    taskReducer
  },
})
