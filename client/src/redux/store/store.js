import { configureStore } from "@reduxjs/toolkit";
import authApi from "../api/authApi";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(authApi.middleware),
});


export default store;   