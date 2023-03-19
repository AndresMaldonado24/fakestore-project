import { createSlice } from "@reduxjs/toolkit"

export interface cartProduct {
    id: number
    title: string
    price: number
    image: string
    quantity: number
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
        addToCart(state, action){
            if(state.cartProducts.length > 0){
                const inCart = state.cartProducts.filter( product => product.id === action.payload.id)
                if(inCart.length == 0){
                    state.cartProducts.push(action.payload)
                }
            }
            else{
                state.cartProducts.push(action.payload)
            }
        },
        addProduct(state, action){
            const updatedCart = state.cartProducts.map( product =>{
                if(product.id === action.payload.id){
                    product.quantity = product.quantity + 1
                }
                return product
            })
            state.cartProducts = [...updatedCart]
        },
        removeProduct(state, action){
            const updatedCart = state.cartProducts.map( product =>{
                if(product.id === action.payload.id){
                    product.quantity = product.quantity - 1
                }
                return product
            })
            state.cartProducts = [...updatedCart]
        },
        deleteProduct(state, action){
            const updatedCart = state.cartProducts.filter( product => product.id !== action.payload.id)
            state.cartProducts = [...updatedCart]
        }
    }
})

export const {addToCart, addProduct, removeProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer