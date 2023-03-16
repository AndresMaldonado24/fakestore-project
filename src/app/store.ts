import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import prodductsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    products: prodductsReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store