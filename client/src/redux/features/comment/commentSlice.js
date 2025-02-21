import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios.js";

const initialState = {
    comments: [],
    isLoading: false,

};

export const createComment = createAsyncThunk('comment/createComment', async ({ postId, comment }, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`/comments/${postId}`, { postId, comment });
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Ошибка комментария");
    }
});

export const getPostComments = createAsyncThunk(
  "comment/getPostComments",
  async (postId) => {
    try {
      const { data } = await axios.get(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments.push(action.payload)
            })
            .addCase(createComment.rejected, (state) => {
                state.isLoading = false;
            })


            .addCase(getPostComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload
            })
            .addCase(getPostComments.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export default commentSlice.reducer;
