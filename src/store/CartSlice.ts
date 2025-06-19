import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as string[],
    reducers: {
        addToCart: (state: string[], action: PayloadAction<string>) => [...state, action.payload],
    }
})

export const {addToCart} = cartSlice.actions; // pour utiliser les actions dans les composants
export default cartSlice.reducer; // pour l'utiliser dans le store.ts