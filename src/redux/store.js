import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import moneySlice from "./slice/moneySlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        money: moneySlice,
        cart: cartSlice
    }
})