import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios.js";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
};

export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, password }, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/register', { username, password });
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Ошибка регистрации");
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/login', { username, password });
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Ошибка авторизации");
    }
});

export const getMe = createAsyncThunk('auth/getme', async ({ rejectWithValue }) => {
    try {
        const { data } = await axios.get('/auth/me');
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Проверка авторизации");
    }
});


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: (builder) => {
        builder

        // Register

            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload;
            })

            // Login

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload;
            })

            // getMe проверка авторизации

            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = null;
                state.user = action.payload?.user;
                state.token = action.payload?.token;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload;
            })

    }
});

export const checkIsAuth = state => Boolean(state.auth.token)

export default authSlice.reducer;
