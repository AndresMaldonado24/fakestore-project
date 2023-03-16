import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface product {
    id: number
    title: string,
    price: number,
    category:string, //men's clothing, women's clothing, electronics, jewelery
    description: string,
    image: string
    rating: {
        rate: number
        count: number
    }
}
interface productList {
    productsList: Array<product>,
    isLoading: boolean
}

const initialState: productList = {
    productsList: [],
    isLoading: false
}

interface response {
    data?: Array<product>
    status: number
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response: response = await axios.get('https://fakestoreapi.com/products')
        .then( res => { return {'data' : res.data, 'status': res.status} })
        .catch( err => { return { 'status' : err.response.status} })
       
        return response
    }
)

export const productsSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //Section API-Fect for All Products
        builder.addCase( fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase( fetchProducts.fulfilled, (state, action) => {
            state.productsList = [...action.payload.data as Array<product>]
            state.isLoading = false
        })
        builder.addCase( fetchProducts.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default productsSlice.reducer