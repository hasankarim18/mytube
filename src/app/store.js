import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videoReducer from '../features/Videos/VideosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videoReducer
  },
});
