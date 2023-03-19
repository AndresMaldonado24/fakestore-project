import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import prodductsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    products: prodductsReducer,
    cart: cartReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store