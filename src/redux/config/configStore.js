import { configureStore } from "@reduxjs/toolkit";
import letters from "../modules/letters";

const store = configureStore({
    reducer: { letters: letters },
})

export default store;