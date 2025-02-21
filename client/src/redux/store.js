import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js"; // Импортируем reducer
import postReducer from "./features/post/postSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    }
});
