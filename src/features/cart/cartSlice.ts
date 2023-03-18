import { createSlice } from "@reduxjs/toolkit"
import { product } from "../products/productsSlice"

export interface cartProduct {
    id: number
    title: string
    price: number
    image: string
    quantity?: number
}

interface cart {
    cartProducts: Array<cartProduct>
}

const initialState: cart = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartProducts.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer