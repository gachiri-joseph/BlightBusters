import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loadingss',
  initialState,
  reducers: {
    setloading(state, action) {
      state.loading = action.payload;
    },
    clearloading(state) {
      state.loading = false;
    },
  },
});

export const {setloading, clearloading} = loadingSlice.actions;
export default loadingSlice.reducer;
