import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        money: 100000000000,
        leftMoney: 0
    }, reducers: {
        calcTotal: (state, action) => {
            state.leftMoney = state.money - (action.payload)
        }
    }

})
export const { calcTotal } = moneySlice.actions
export default moneySlice.reducer