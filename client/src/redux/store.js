

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js"; // Импортируем reducer

export const store = configureStore({
    reducer: {
        auth: authReducer // Передаём именно reducer
    }
});
