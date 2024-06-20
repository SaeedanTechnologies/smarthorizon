import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducer'
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
    admin: adminReducer,
    theme: themeReducer


})

export default rootReducer