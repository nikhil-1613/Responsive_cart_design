import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

//creating store
export const store = configureStore({
    reducer:{
        allCart : cartSlice
    }
})

