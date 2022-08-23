import { createSlice } from "@reduxjs/toolkit";
import data from '../../api/data.json'
export const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        error: "",
        status: "idle"
    }, reducers: {
        fetchProducts: (state) => {
            state.items = data.products
        }
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer