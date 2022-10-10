import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./reducer/combine_reducer";
const store =configureStore({
    reducer:Reducers
})
export default store;