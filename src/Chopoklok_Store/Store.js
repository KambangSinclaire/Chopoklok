import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/CartSlice";


// Store setup

export const Store = configureStore(
    {
        reducer:{
            cart: cartReducer
        },
    }
)