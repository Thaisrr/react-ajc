import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.ts";
import alertReducer from "./AlertSlice.ts";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        alert: alertReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;