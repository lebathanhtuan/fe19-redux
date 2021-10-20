import { configureStore } from '@reduxjs/toolkit'
import {
  commonReducer,
  productReducer,
  userReducer,
} from './redux/reducers'

export const store = configureStore({
  reducer: {
    commonReducer,
    productReducer,
    userReducer,
  },
})
