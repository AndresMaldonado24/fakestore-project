import { createSlice } from "@reduxjs/toolkit"

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
            if(state.cartProducts.length > 0){
                const inCart = state.cartProducts.filter( product => product.id === action.payload.id)
                if(inCart.length == 0){
                    state.cartProducts.push(action.payload)
                }
            }
            else{
                state.cartProducts.push(action.payload)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer