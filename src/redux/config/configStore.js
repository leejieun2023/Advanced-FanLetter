import { configureStore } from "@reduxjs/toolkit";
import letters from "../modules/letterSlice";
import auth from "../modules/authSlice";

const store = configureStore({
    reducer: {
        letters,
        auth,
    },
})

export default store;