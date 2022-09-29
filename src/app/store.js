import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videosReducer from '../features/Videos/VideosSlice';
import videoReducer from '../features/video/videoSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    video: videoReducer
  },
});
