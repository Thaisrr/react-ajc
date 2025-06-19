import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {AlertType} from "../utils/types/AlertType.ts";

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [] as AlertType[],
    reducers: {
        createAlert: (state: AlertType[], action: PayloadAction<AlertType>) => [...state, action.payload],
        removeAlert: (state: AlertType[], action: PayloadAction<AlertType>) => {
            const copy = [...state];
            const index = copy.indexOf(action.payload);
            copy.splice(index, 1);
            return copy;
        }
    }
});

export const {createAlert, removeAlert} = alertSlice.actions;
export default alertSlice.reducer;