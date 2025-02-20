import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios.js";

const initialState = {
  posts: [],
  popularPosts: [],
  loading: false
};

export const createPost = createAsyncThunk(
  "post/createPost", async (params) => {
    try {
      const { data } = await axios.post("/posts", params);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllPosts = createAsyncThunk('/post/getAllPosts', async() => {
  try {
    const { data } = await axios.get('/posts')
    return data
  } catch (error) {
    console.log(error);
  }
})

export const removePost = createAsyncThunk('post/removePost', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/posts/${id}`);
    return data; // Вернёт объект { message, _id }
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Ошибка при удалении');
  }
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(createPost.pending, (state) => {
          state.loading = true
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.loading = false,
            state.posts.push(action.payload)
        })
        .addCase(createPost.rejected, (state) => {
            state.loading = false
        })


        .addCase(getAllPosts.pending, (state) => {
          state.loading = true
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false,
            state.posts = action.payload.posts
            state.popularPosts = action.payload.popularPosts
        })
        .addCase(getAllPosts.rejected, (state) => {
            state.loading = false
        })


        .addCase(removePost.pending, (state) => {
          state.loading = true
        })
        .addCase(removePost.fulfilled, (state, action) => {
          state.loading = false;
          state.posts = state.posts.filter((post) => post._id !== action.payload._id);
        })
        .addCase(removePost.rejected, (state) => {
            state.loading = false
        })
    }
});

export default postSlice.reducer;
