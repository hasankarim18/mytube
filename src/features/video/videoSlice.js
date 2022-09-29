import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideoThunk = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = getVideo(id)
    return video
})


const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoThunk.pending, (state) => {
                state.error = false
                state.isLoading = true
                state.video = {}
            })
            .addCase(fetchVideoThunk.fulfilled, (state, action) => {
                state.error = false
                state.isLoading = false
                state.video = action.payload
            })
            .addCase(fetchVideoThunk.rejected, (state, action) => {
                state.error = true
                state.isLoading = false
                state.video = {}
                state.error = action.error.message
            })
    }
})

const videoReducer = videoSlice.reducer


export default videoReducer

