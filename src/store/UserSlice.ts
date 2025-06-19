import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const localToken = localStorage.getItem("token");
type UserState = string | null;
const userSlice = createSlice({
    name: 'user',
    initialState: localToken as UserState,
    reducers: {
        setUser: (_state: UserState, action: PayloadAction<string>) => (action.payload),
        unsetUser: () => null
    }
});

export const {setUser, unsetUser} = userSlice.actions;
export default userSlice.reducer;