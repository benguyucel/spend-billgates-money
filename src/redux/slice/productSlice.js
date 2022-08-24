import { createSlice } from "@reduxjs/toolkit";
import data from '../../api/data.json'
export const productSlice = createSlice({
    name: "products",
    initialState: {
        items: data.products,
    }, reducers: {}
})
export const { updateCount, getBuyed } = productSlice.actions
export default productSlice.reducer