import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    }, reducers: {
        addToCart: (state, action) => {
            const { item, count } = action.payload
            const findITem = state.items.find(sITem => sITem.id === item.id)
            if (typeof findITem === "undefined") {
                state.items.push({ ...item, count: count })
            } else {
                findITem.count = count
            }
        }
    }
})
export const selectCart = state => state.cart.items.filter(item => item.count !== 0);
export const getTotal = state => state.cart.items.reduce((current, val) => {
    return current += Number(val.productPrice) * Number(val.count)
}, 0)
export const { addToCart } = productSlice.actions
export default productSlice.reducer