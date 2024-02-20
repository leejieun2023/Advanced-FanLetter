import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined: false,
    userInfo: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogined = true;
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.isLogined = false;
            state.userInfo = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;