import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import loadingSlice from '../slices/loadingSlice';

const store = configureStore({
  reducer: {
    userss: userSlice,
    loadingg: loadingSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
