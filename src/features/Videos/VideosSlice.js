import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "./VideosApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchVideosThunk = createAsyncThunk('videso/fetchVideos', async () => {
    const response = await getVideos()
    return response
})

export const videoSlice = createSlice({
    name: "videso",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideosThunk.pending, (state) => {
                state.isError = false
                state.isLoading = true
                state.videos = []
            })
            .addCase(fetchVideosThunk.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.videos = action.payload
            })
            .addCase(fetchVideosThunk.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.videos = []
                state.error = action.error.message
            })
    }
})

const videoReducer = videoSlice.reducer


export default videoReducer

