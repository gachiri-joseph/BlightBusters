import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'userss',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
      console.log('user', state.user);
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;


export const selectUser = state=> state. userss.user;


export default userSlice.reducer;
