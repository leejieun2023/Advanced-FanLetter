import { configureStore, combineReducers } from "@reduxjs/toolkit";
import letters from "../modules/letterSlice";
import auth from "../modules/authSlice";

const rootReducer = combineReducers({ letters, auth });

const store = configureStore({
    reducer: rootReducer,
});

export default store;